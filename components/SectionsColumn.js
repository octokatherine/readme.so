import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { restrictToVerticalAxis, restrictToWindowEdges } from '@dnd-kit/modifiers'
import { useState } from 'react'
import { SortableItem } from './SortableItem'
import { Item } from './Item'

export const SectionsColumn = ({
  selectedSections,
  setSelectedSections,
  sections,
  setSections,
  setFocusedSectionSlug,
  focusedSectionSlug,
}) => {
  const [activeId, setActiveId] = useState(null)
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const onAddSection = (e, section) => {
    setSections((prev) => prev.filter((s) => s.slug !== section.slug))
    setSelectedSections((prev) => [...prev, section])
    setFocusedSectionSlug(section.slug)
  }

  const handleDragEnd = (event) => {
    const { active, over } = event

    if (active.id !== over.id) {
      setSelectedSections((sections) => {
        const oldIndex = sections.findIndex((s) => s.slug === active.id)
        const newIndex = sections.findIndex((s) => s.slug === over.id)
        return arrayMove(sections, oldIndex, newIndex)
      })
    }

    setActiveId(null)
  }

  const handleDragStart = (event) => {
    const { active } = event

    setActiveId(active.id)
  }

  return (
    <div className="sections px-3">
      <h3 className="text-lg leading-6 font-medium text-gray-900 mb-3">Sections</h3>
      <ul className="space-y-3 mb-12">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          onDragStart={handleDragStart}
          modifiers={[restrictToVerticalAxis]}
        >
          <SortableContext items={selectedSections} strategy={verticalListSortingStrategy}>
            {selectedSections.map((s) => (
              <SortableItem
                key={s.slug}
                id={s.slug}
                section={s}
                focusedSectionSlug={focusedSectionSlug}
                setFocusedSectionSlug={setFocusedSectionSlug}
              />
            ))}
          </SortableContext>
          <DragOverlay modifiers={[restrictToWindowEdges]}>
            {activeId ? (
              <Item
                id={activeId}
                name={selectedSections.find((s) => s.slug === activeId).name}
                focusedSectionSlug={focusedSectionSlug}
              />
            ) : null}
          </DragOverlay>
        </DndContext>
      </ul>
      <h4 className="text-xs leading-6 text-gray-900 mb-3">
        Click on a section below to add it to your readme
      </h4>
      <ul className="space-y-3 mb-12">
        {sections.map((s) => (
          <li
            onClick={(e) => onAddSection(e, s)}
            key={s.name}
            className="bg-white shadow rounded-md pl-3 pr-6 py-2 flex items-center cursor-pointer"
          >
            <p>{s.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
