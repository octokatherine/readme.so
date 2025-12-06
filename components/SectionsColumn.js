import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { restrictToVerticalAxis } from '@dnd-kit/modifiers'
import { arrayMove, SortableContext, sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import { useTranslation } from 'next-i18next'
import { useEffect, useState, useMemo } from 'react'
import Image from 'next/image'
import useLocalStorage from '../hooks/useLocalStorage'
import { SortableItem } from './SortableItem'
import CustomSection from './CustomSection'
import SectionFilter from './SectionFilter'
import SearchBox from './SearchBox' // 新增 - 搜索框组件

const kebabCaseToTitleCase = (str) => {
  return str
    .split('-')
    .map((word) => {
      return word.slice(0, 1).toUpperCase() + word.slice(1)
    })
    .join(' ')
}

export const SectionsColumn = ({
  selectedSectionSlugs,
  setSelectedSectionSlugs,
  sectionSlugs,
  setSectionSlugs,
  setFocusedSectionSlug,
  focusedSectionSlug,
  templates,
  originalTemplate,
  setTemplates,
  getTemplate,
  darkMode,
}) => {
  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const [pageRefreshed, setpageRefreshed] = useState(false)
  const [addAction, setAddAction] = useState(false)
  const [currentSlugList, setCurrentSlugList] = useState([])
  const [slugsFromPreviousSession, setSlugsFromPreviousSession] = useState([])
  const [searchFilter, setSearchFilter] = useState('')
  const [filteredSlugs, setFilteredSlugs] = useState([])
  const [query, setQuery] = useState('') // 新增：用于过滤已添加的 sections
  const { saveBackup, deleteBackup } = useLocalStorage()

  useEffect(() => {
    var slugsFromPreviousSession =
      localStorage.getItem('current-slug-list') == null
        ? 'title-and-description'
        : localStorage.getItem('current-slug-list')
    setSlugsFromPreviousSession(slugsFromPreviousSession)
    if (slugsFromPreviousSession.length > 0) {
      setpageRefreshed(true)
      let slugList = []

      var hasMultipleSlugsFromPrevSession = slugsFromPreviousSession.indexOf(',') > -1
      hasMultipleSlugsFromPrevSession
        ? (slugList = slugsFromPreviousSession.split(','))
        : slugList.push(slugsFromPreviousSession)
      slugList.forEach(function (entry) {
        setSectionSlugs((prev) => prev.filter((s) => s != entry))
      })
      setCurrentSlugList(slugList)
      setSelectedSectionSlugs(slugList)
      // 注意：currentSlugList 可能在首次渲染时还是空数组，这里尽量直接使用 slugList
      setFocusedSectionSlug(slugList[0])
      localStorage.setItem('current-focused-slug', slugList[0])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const updateSlugsOnAdd = (previousState, section) => {
    return previousState.filter((slug) => slug !== section)
  }

  const onAddSection = (e, section) => {
    localStorage.setItem('current-focused-slug', section)
    setpageRefreshed(false)
    setAddAction(true)
    setSectionSlugs((prev) => updateSlugsOnAdd(prev, section))
    setFilteredSlugs((prev) => updateSlugsOnAdd(prev, section))
    setSelectedSectionSlugs((prev) => [...prev, section])
    setFocusedSectionSlug(localStorage.getItem('current-focused-slug'))
    resetSearchFilter()
  }

  useEffect(() => {
    localStorage.setItem('current-slug-list', selectedSectionSlugs)
  }, [selectedSectionSlugs])

  const handleDragEnd = (event) => {
    const { active, over } = event
    if (!over || !active) return
    if (active.id !== over.id) {
      setSelectedSectionSlugs((sections) => {
        const oldIndex = sections.findIndex((s) => s === active.id)
        const newIndex = sections.findIndex((s) => s === over.id)
        if (oldIndex === -1 || newIndex === -1) return sections
        return arrayMove(sections, oldIndex, newIndex)
      })
    }
  }

  const onDeleteSection = (e, sectionSlug) => {
    e.stopPropagation()
    setSelectedSectionSlugs((prev) => prev.filter((s) => s !== sectionSlug))
    setSectionSlugs((prev) => [...prev, sectionSlug])
    setFocusedSectionSlug(null)
    localStorage.setItem('current-focused-slug', 'noEdit')
  }

  const onResetSection = (e, sectionSlug) => {
    e.stopPropagation()

    let originalSection

    if (sectionSlug.slice(0, 6) === 'custom') {
      const sectionTitle = kebabCaseToTitleCase(sectionSlug.slice(6, sectionSlug.length))
      originalSection = {
        slug: sectionSlug,
        name: sectionTitle,
        markdown: `
## ${sectionTitle}`,
      }
    } else {
      originalSection = originalTemplate.find((s) => s.slug === sectionSlug)
    }

    const newTemplates = templates.map((s) => {
      if (s.slug === originalSection.slug) {
        return originalSection
      }

      return s
    })
    setTemplates(newTemplates)
    saveBackup(newTemplates)
  }

  const resetSelectedSections = () => {
    const data = localStorage.getItem('current-slug-list')

    const sectionResetConfirmed = window.confirm(
      'All sections of your readme will be removed; to continue, click OK'
    )
    if (sectionResetConfirmed === true) {
      const slugList = data ? data.split(',') : []

      setSectionSlugs((prev) => [...prev, ...slugList].filter((s) => s !== 'title-and-description'))
      setSelectedSectionSlugs(['title-and-description'])
      setFocusedSectionSlug('title-and-description')
      localStorage.setItem('current-focused-slug', 'noEdit')
      setTemplates(originalTemplate)
      deleteBackup()
    }
  }

  useEffect(() => {
    setFocusedSectionSlug(localStorage.getItem('current-focused-slug'))
  }, [focusedSectionSlug])

  const { t } = useTranslation('editor')

  // 计算已添加的 sections，根据 query 过滤
  const filteredAdded = useMemo(() => {
    const q = (query || '').toLowerCase().trim()
    if (!q) return selectedSectionSlugs
    return selectedSectionSlugs.filter((slug) => {
      const template = getTemplate(slug) || {}
      const name = (template.name || '').toLowerCase()
      const body = (template.markdown || '').toLowerCase()
      return name.includes(q) || body.includes(q)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSectionSlugs, query])

  // 原始未添加的 sections，按字母排序的副本（不直接修改 props）
  const alphabetizedSectionSlugs = useMemo(() => {
    return sectionSlugs ? sectionSlugs.slice().sort() : []
  }, [sectionSlugs])

  const getAutoCompleteResults = (searchQuery) => {
    const suggestedSlugs = sectionSlugs.filter((slug) => {
      return getTemplate(slug).name.toLowerCase().includes(searchQuery.toLowerCase())
    })

    return suggestedSlugs.length ? suggestedSlugs : [undefined]
  }

  const resetSearchFilter = () => setSearchFilter('')

  useEffect(() => {
    if (!searchFilter) {
      setFilteredSlugs([])
      return
    }

    const suggestedSlugs = getAutoCompleteResults(searchFilter.trim())

    setFilteredSlugs(suggestedSlugs)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchFilter])

  return (
    <div className="sections w-80">
      <h3 className="px-1 text-sm font-medium border-b-2 border-transparent text-emerald-500 whitespace-nowrap focus:outline-none">
        {t('section-column-section')}
        {
          <button
            className="focus:outline-none float-right"
            type="button"
            onClick={resetSelectedSections}
          >
            <span className="pl-2 float-right">{t('section-column-click-reset')}</span>
            <Image
              className="w-auto h-5 inline-block"
              src={darkMode ? '/reset-light.svg' : '/reset.svg'}
              alt="Delete"
              width={16}
              height={16}
            />
          </button>
        }
      </h3>
      <div className="px-3 pr-4 overflow-y-scroll full-screen">
        {selectedSectionSlugs.length > 0 && (
          <div className="my-2">
            <SearchBox placeholder="Search added sections..." onSearch={setQuery} />
          </div>
        )}

        {selectedSectionSlugs.length > 0 && (
          <h4 className="mb-3 text-xs leading-6 text-gray-900 dark:text-gray-300">
            {t('section-column-click-edit')}
          </h4>
        )}

        <ul className="mb-12 space-y-3">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            modifiers={[restrictToVerticalAxis]}
          >
            <SortableContext items={filteredAdded}>
              {filteredAdded.map((s) => {
                const template = getTemplate(s)
                if (template) {
                  return (
                    <SortableItem
                      key={s}
                      id={s}
                      section={template}
                      focusedSectionSlug={focusedSectionSlug}
                      setFocusedSectionSlug={setFocusedSectionSlug}
                      onDeleteSection={onDeleteSection}
                      onResetSection={onResetSection}
                    />
                  )
                }
                return null
              })}
            </SortableContext>
          </DndContext>
        </ul>

        {sectionSlugs.length > 0 && (
          <h4 className="mb-3 text-xs leading-6 text-gray-900 dark:text-gray-300 overflow-ellipsis">
            {t('section-column-click-add')}
          </h4>
        )}
        <SectionFilter searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
        <CustomSection
          setSelectedSectionSlugs={setSelectedSectionSlugs}
          setFocusedSectionSlug={setFocusedSectionSlug}
          setpageRefreshed={setpageRefreshed}
          setAddAction={setAddAction}
          setTemplates={setTemplates}
        />

        {/* 未添加列表：根据 filteredSlugs 或 alphabetizedSectionSlugs 显示 */}
        <ul className="mb-12 space-y-3">
          {(() => {
            const list = !filteredSlugs.length
              ? alphabetizedSectionSlugs
              : filteredSlugs.slice().sort()
            return list.map((s) => {
              if (s === undefined) {
                return (
                  <h4
                    className="mb-3 text-xs leading-6 text-gray-900 dark:text-gray-300"
                    key="unavailable-section"
                  >
                    The section you're looking for is unavailable
                  </h4>
                )
              }

              const template = getTemplate(s)
              if (template) {
                return (
                  <li key={s}>
                    <button
                      className="flex items-center block w-full h-full py-2 pl-3 pr-6 bg-white dark:bg-gray-200 rounded-md shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400"
                      type="button"
                      onClick={(e) => onAddSection(e, s)}
                    >
                      <span>{template.name}</span>
                    </button>
                  </li>
                )
              }
              return null
            })
          })()}
        </ul>
      </div>
    </div>
  )
}
