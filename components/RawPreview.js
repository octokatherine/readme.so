export default function RawPreview({ text }) {
  return (
    <textarea
      readOnly
      className="h-full w-full resize-none focus:outline-none"
      value={text}
    ></textarea>
  )
}
