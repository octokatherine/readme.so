import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { restrictToVerticalAxis } from '@dnd-kit/modifiers'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'

import { SortableItem } from './SortableItem'
import { useTranslation } from 'next-i18next'

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

  const onAddSection = (e, section) => {
    setSectionSlugs((prev) => prev.filter((s) => s !== section))
    setSelectedSectionSlugs((prev) => [...prev, section])
    setFocusedSectionSlug(section)
  }

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
  }

  const { t } = useTranslation('editor')

  const alphabetizedSectionSlugs = sectionSlugs.sort()

  return (
    <div className="sections w-80">
      <h3 className="border-transparent text-emerald-500 whitespace-nowrap px-1 border-b-2 font-medium text-sm focus:outline-none">
        {t('section-column-section')}
      </h3>
      <div className="full-screen overflow-y-scroll px-3 pr-4">
        {selectedSectionSlugs.length > 0 && (
          <h4 className="mb-3 text-xs leading-6 text-gray-900">{t('section-column-click-edit')}</h4>
        )}
        <ul data-testid="selected-list" className="mb-12 space-y-3">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            modifiers={[restrictToVerticalAxis]}
          >
            <SortableContext items={selectedSectionSlugs} strategy={verticalListSortingStrategy}>
              {selectedSectionSlugs.map((s) => (
                <SortableItem
                  key={s}
                  id={s}
                  section={getTemplate(s)}
                  focusedSectionSlug={focusedSectionSlug}
                  setFocusedSectionSlug={setFocusedSectionSlug}
                  onDeleteSection={onDeleteSection}
                />
              ))}
            </SortableContext>
          </DndContext>
        </ul>
        {sectionSlugs.length > 0 && (
          <h4 className="mb-3 text-xs leading-6 text-gray-900 overflow-ellipsis">
            {t('section-column-click-add')}
          </h4>
        )}
        <ul data-testid="sections-list" className="mb-12 space-y-3">
          {alphabetizedSectionSlugs.map((s) => (
            <li key={s}>
              <button
                data-testid="section-button"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 w-full h-full flex items-center py-2 pl-3 pr-6 bg-white rounded-md shadow cursor-pointer block"
                type="button"
                onClick={(e) => onAddSection(e, s)}
              >
                <span>{getTemplate(s).name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
