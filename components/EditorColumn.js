export const EditorColumn = ({ setMarkdown }) => {
  return (
    <div className="px-3 w-1/2 flex-1">
      <h3 className="text-lg leading-6 font-medium text-gray-900 mb-3">Editor</h3>
      <textarea
        id="markdown"
        name="markdown"
        rows="12"
        className="shadow-sm block w-full focus:ring-green-500 focus:border-green-500 sm:text-sm border-gray-800 rounded-md p-6 bg-gray-700 text-white"
        onChange={(e) => setMarkdown(e.target.value)}
      ></textarea>
    </div>
  )
}
