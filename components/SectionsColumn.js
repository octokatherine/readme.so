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
import { useEffect, useMemo, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { SortableItem } from './SortableItem'
import CustomSection from './CustomSection'
import SectionFilter from './SectionFilter'

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
  const [slugsFromPreviousSession, setSlugsFromPreviousSession] = useState([])
  const [searchFilter, setSearchFilter] = useState('')
  const [filteredSlugs, setFilteredSlugs] = useState([])
  const { saveBackup, deleteBackup } = useLocalStorage()

  useEffect(() => {
    const storedSlugs =
      localStorage.getItem('current-slug-list') === null
        ? 'title-and-description'
        : localStorage.getItem('current-slug-list')
    setSlugsFromPreviousSession(storedSlugs)
    if (storedSlugs.length > 0) {
      setpageRefreshed(true)
      const slugList = storedSlugs.split(',')
      slugList.forEach(function (entry) {
        setSectionSlugs((prev) => prev.filter((s) => s !== entry))
      })
      setSelectedSectionSlugs(slugList)
      setFocusedSectionSlug(slugList[0])
      localStorage.setItem('current-focused-slug', slugList[0])
    }
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
    if (active.id !== over.id) {
      setSelectedSectionSlugs((sections) => {
        const oldIndex = sections.findIndex((s) => s === active.id)
        const newIndex = sections.findIndex((s) => s === over.id)

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

  const dedupedSelectedSlugs = useMemo(() => {
    return pageRefreshed || addAction ? [...new Set(selectedSectionSlugs)] : selectedSectionSlugs
  }, [selectedSectionSlugs, pageRefreshed, addAction])

  const availableSlugs = useMemo(() => {
    let slugs = [...sectionSlugs]
    if (pageRefreshed && slugsFromPreviousSession.indexOf('title-and-description') === -1) {
      if (!slugs.includes('title-and-description')) {
        slugs.push('title-and-description')
      }
    }

    const sorted = filteredSlugs.length ? [...filteredSlugs].sort() : [...slugs].sort()

    return pageRefreshed || addAction ? [...new Set(sorted)] : sorted
  }, [sectionSlugs, filteredSlugs, pageRefreshed, addAction, slugsFromPreviousSession])

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
  }, [searchFilter])

  return (
    <div className="sections w-full md:w-64 lg:w-80">
      <h3 className="px-1 text-sm font-medium border-b-2 border-transparent text-emerald-500 whitespace-nowrap focus:outline-none">
        Sections
        {
          <button
            className="focus:outline-none focus:ring-2 focus:ring-emerald-400 float-right hover:text-emerald-600 transition-colors"
            type="button"
            onClick={resetSelectedSections}
          >
            <span className="pl-2 float-right">Reset</span>
            <img className="w-auto h-5 inline-block" src="reset.svg" alt="Reset" />
          </button>
        }
      </h3>
      <div className="px-3 pr-4 overflow-y-scroll full-screen">
        {selectedSectionSlugs.length > 0 && (
          <h4 className="mb-3 text-xs leading-6 text-gray-900">
            Click on a section below to edit the contents
          </h4>
        )}
        <ul className="mb-12 space-y-3">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            modifiers={[restrictToVerticalAxis]}
          >
            <SortableContext items={dedupedSelectedSlugs}>
              {dedupedSelectedSlugs.map((s) => {
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
              })}
            </SortableContext>
          </DndContext>
        </ul>

        {sectionSlugs.length > 0 && (
          <h4 className="mb-3 text-xs leading-6 text-gray-900 overflow-ellipsis">
            Click on a section below to add it to your readme
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
        <ul className="mb-12 space-y-3">
          {availableSlugs.map((s) => {
            if (s === undefined) {
              return (
                <h4 className="mb-3 text-xs leading-6 text-gray-900" key="unavailable-section">
                  The section you're looking for is unavailable
                </h4>
              )
            } else {
              const template = getTemplate(s)
              if (template) {
                return (
                  <li key={s}>
                    <button
                      className="flex items-center w-full h-full py-2 pl-3 pr-6 bg-white rounded-md shadow cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 transition-colors"
                      type="button"
                      onClick={(e) => onAddSection(e, s)}
                    >
                      <span>{template.name}</span>
                    </button>
                  </li>
                )
              }
            }
          })}
        </ul>
      </div>
    </div>
  )
}
