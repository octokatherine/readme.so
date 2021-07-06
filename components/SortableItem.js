import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

export function SortableItem(props) {
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
      className={`bg-white shadow rounded-md pl-3 pr-6 py-2 flex items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 relative select-none ${
        props.section.slug === props.focusedSectionSlug ? 'ring-2 ring-emerald-400' : ''
      }`}
    >
      <button
        type="button"
        className="mr-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400"
        {...listeners}
      >
        <img className="w-5 h-5" src="drag.svg" />
      </button>
      <p>{props.section.name}</p>
      {props.section.slug === props.focusedSectionSlug && (
        <button
          className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 absolute right-2"
          type="button"
          aria-label="Delete section"
          onClick={onClickTrash}
        >
          <img className="w-auto h-5" src="trash.svg" alt="trash-icon" />
        </button>
      )}
    </li>
  )
}
