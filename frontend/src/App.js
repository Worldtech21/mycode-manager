import React from "react";
import SnippetForm from "./components/SnippetForm";
import SnippetList from "./components/SnippetList";

function App() {
  return (
    <div>
      <h1>Code Snippet Manager</h1>
      <SnippetForm />
      <SnippetList />
    </div>
  );
}

export default App;
