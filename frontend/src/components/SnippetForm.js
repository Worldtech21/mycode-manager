import React, { useState } from "react";
import { createSnippet } from "../api";

function SnippetForm() {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createSnippet({ title, code });
    setTitle("");
    setCode("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={code} onChange={(e) => setCode(e.target.value)} placeholder="Code" />
      <button type="submit">Save</button>
    </form>
  );
}

export default SnippetForm;
