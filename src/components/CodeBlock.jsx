const CodeBlock = ({ code, language }) => {
  const lines = code.split('\n')

  return (
    <div className="bg-[#2b2b2b] text-gray-100 p-6 sm:p-8 overflow-x-auto">
      <pre className="text-sm sm:text-base leading-relaxed font-jetbrains">
        <code>
          {lines.map((line, index) => (
            <div key={index} className="table-row">
              <span className="table-cell text-right pr-6 text-gray-600 select-none w-12">
                {index + 1}
              </span>
              <span className="table-cell text-gray-200">{line || ' '}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  )
}

export default CodeBlock

