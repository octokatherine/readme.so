import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

export function SortableItem(props) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  const onClickSection = () => {
    props.setFocusedSectionSlug(props.id)
  }

  const onClickTrash = () => {
    props.onDeleteSection(props.section.slug)
  }

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      onClick={onClickSection}
      className={`bg-white shadow rounded-md pl-3 pr-6 py-2 flex items-center cursor-pointer focus:outline-none relative  ${
        props.section.slug === props.focusedSectionSlug ? 'ring-2 ring-emerald-400' : ''
      }`}
    >
      <img className="h-5 w-5 mr-2" src="drag.svg" {...listeners} />
      <p>{props.section.name}</p>
      {props.section.slug === props.focusedSectionSlug && (
        <img onClick={onClickTrash} className="h-5 w-auto absolute right-2" src="trash.svg" />
      )}
    </li>
  )
}
