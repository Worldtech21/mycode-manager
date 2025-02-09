import React, { useEffect, useState } from "react";
import { fetchSnippets } from "../api";

function SnippetList() {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    async function loadSnippets() {
      const data = await fetchSnippets();
      setSnippets(data);
    }
    loadSnippets();
  }, []);

  return (
    <div>
      {snippets.map((snippet) => (
        <div key={snippet.id}>
          <h3>{snippet.title}</h3>
          <pre>{snippet.code}</pre>
        </div>
      ))}
    </div>
  );
}

export default SnippetList;
