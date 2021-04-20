import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { restrictToVerticalAxis } from '@dnd-kit/modifiers'
import { arrayMove, SortableContext, sortableKeyboardCoordinates } from '@dnd-kit/sortable'

import { SortableItem } from './SortableItem'
import { useEffect, useState } from 'react'

export const SectionsColumn = ({
  selectedSectionSlugs,
  setSelectedSectionSlugs,
  sectionSlugs,
  setSectionSlugs,
  setFocusedSectionSlug,
  focusedSectionSlug,
  getTemplate,
}) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )
  const [pageRefreshed, setpageRefreshed] = useState(false)
  const [addAction, setAddAction] = useState(false)
  const [currentSlugList, setCurrentSlugList] = useState([])
  const [currentFocussedSlug, setCurrentFocussedSlug] = useState('title-and-description')
  const [slugsFromPreviousSession, setSlugsFromPreviousSession] = useState([])
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
      setFocusedSectionSlug(currentSlugList[0])
      localStorage.setItem('current-focused-slug', slugList[0])
    }
  }, [])

  const onAddSection = (e, section) => {
    localStorage.setItem('current-focused-slug', section)
    setpageRefreshed(false)
    setAddAction(true)
    setSectionSlugs((prev) => prev.filter((s) => s !== section))
    setSelectedSectionSlugs((prev) => [...prev, section])
    setFocusedSectionSlug(localStorage.getItem('current-focused-slug'))
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

  useEffect(() => {
    setFocusedSectionSlug(localStorage.getItem('current-focused-slug'))
  }, [focusedSectionSlug])

  let alphabetizedSectionSlugs = sectionSlugs.sort()

  let selectSlugsForComparison = []

  return (
    <div className="sections">
      <h3 className="border-transparent text-emerald-500 whitespace-nowrap px-1 border-b-2 font-medium text-sm focus:outline-none">
        Sections
      </h3>
      <div className="full-screen overflow-y-scroll px-3 pr-4">
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
            <SortableContext items={selectedSectionSlugs}>
              {
                (pageRefreshed || addAction
                  ? (selectedSectionSlugs = [...new Set(selectedSectionSlugs)])
                  : ' ',
                (selectSlugsForComparison = removeByIndex(
                  selectedSectionSlugs,
                  selectedSectionSlugs.indexOf(currentFocussedSlug)
                )),
                (pageRefreshed &&
                  slugsFromPreviousSession.indexOf('title-and-description') == -1) ||
                (addAction &&
                  sectionSlugs.indexOf('title-and-description') > -1 &&
                  selectSlugsForComparison.indexOf('title-and-description') == -1 &&
                  selectedSectionSlugs.indexOf('title-and-description') > -1)
                  ? selectedSectionSlugs.splice(
                      selectedSectionSlugs.indexOf('title-and-description'),
                      1
                    )
                  : ' ',
                selectedSectionSlugs.map((s) => (
                  <SortableItem
                    key={s}
                    id={s}
                    section={getTemplate(s)}
                    focusedSectionSlug={focusedSectionSlug}
                    setFocusedSectionSlug={setFocusedSectionSlug}
                    onDeleteSection={onDeleteSection}
                  />
                )))
              }
            </SortableContext>
          </DndContext>
        </ul>
        {sectionSlugs.length > 0 && (
          <h4 className="mb-3 text-xs leading-6 text-gray-900">
            Click on a section below to add it to your readme
          </h4>
        )}
        <ul className="mb-12 space-y-3">
          {
            (pageRefreshed && slugsFromPreviousSession.indexOf('title-and-description') == -1
              ? sectionSlugs.push('title-and-description')
              : ' ',
            (alphabetizedSectionSlugs = sectionSlugs.sort()),
            pageRefreshed || addAction
              ? (alphabetizedSectionSlugs = [...new Set(alphabetizedSectionSlugs)])
              : ' ',
            alphabetizedSectionSlugs.map((s) => (
              <li key={s}>
                <button
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 w-full h-full flex items-center py-2 pl-3 pr-6 bg-white rounded-md shadow cursor-pointer block"
                  type="button"
                  onClick={(e) => onAddSection(e, s)}
                >
                  <span>{getTemplate(s).name}</span>
                </button>
              </li>
            )))
          }
        </ul>
      </div>
    </div>
  )
}

function removeByIndex(array, index) {
  return array.filter(function (el, i) {
    return index !== i
  })
}
