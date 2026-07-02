import Editor from "@monaco-editor/react";

function SqlEditor({ query, setQuery }) {

  return (
    <section className="bg-white rounded-xl shadow-sm p-6 mt-6">

      <h2 className="text-xl font-semibold mb-4">
        SQL Editor
      </h2>

      <Editor
        height="350px"
        language="sql"
        theme="vs-dark"
        value={query}
        onChange={(value) => setQuery(value || "")}
        options={{
          minimap: {
            enabled: false,
          },
          fontSize: 15,
          wordWrap: "on",
          automaticLayout: true,
          scrollBeyondLastLine: false,
          roundedSelection: true,
          padding: {
            top: 12,
          },
        }}
      />

    </section>
  );
}

export default SqlEditor;