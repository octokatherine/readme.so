import { memo } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

export const SortableItem = memo(function SortableItem(props) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  const onClickSection = () => {
    localStorage.setItem('current-focused-slug', props.id)
    props.setFocusedSectionSlug(props.id)
  }

  const onClickTrash = (e) => {
    props.onDeleteSection(e, props.section.slug)
  }

  const onClickReset = (e) => {
    const sectionResetConfirmed = window.confirm(
      'The section will be reset to default template; to continue, click OK'
    )
    if (sectionResetConfirmed === true) {
      props.onResetSection(e, props.section.slug)
    }
  }

  const onKeyUp = (e) => {
    if (e.key.toLowerCase() === 'enter') {
      onClickSection()
    }
  }

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      onClick={onClickSection}
      onKeyUp={onKeyUp}
      className={`bg-white shadow rounded-md pl-1 pr-14 py-2 flex items-center cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 relative select-none transition-colors ${
        props.section.slug === props.focusedSectionSlug ? 'ring-2 ring-emerald-400' : ''
      }`}
    >
      <button
        type="button"
        className="p-2 -m-1 mr-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400"
        {...listeners}
      >
        <img className="w-5 h-5" src="drag.svg" alt="Drag to reorder" />
      </button>
      <p>{props.section.name}</p>
      {props.section.slug === props.focusedSectionSlug && (
        <>
          <button
            className="p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 absolute right-8"
            type="button"
            aria-label="Reset section"
            onClick={onClickReset}
          >
            <img className="w-auto h-5" src="reset.svg" alt="Reset section" />
          </button>
          <button
            className="p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 absolute right-1"
            type="button"
            aria-label="Delete section"
            onClick={onClickTrash}
          >
            <img className="w-auto h-5" src="trash.svg" alt="Delete section" />
          </button>
        </>
      )}
    </li>
  )
})
