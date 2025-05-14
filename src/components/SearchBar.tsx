"use client";

import { useEffect, useState } from "react";
import lunr from "lunr";

interface BookMeta {
  id: string;
  title: string;
  author: string;
}

export default function SearchBar() {
  const [idx, setIdx] = useState<lunr.Index | null>(null);
  const [books, setBooks] = useState<BookMeta[]>([]);
  const [query, setQuery] = useState("");
  const [matches, setMatches] = useState<BookMeta[]>([]);

  useEffect(() => {
    Promise.all([
      fetch("/books-index.json").then(r => r.json()),
      fetch("/books-summary.json").then(r => r.json())
    ]).then(([rawIdx, summary]) => {
      setIdx(lunr.Index.load(rawIdx));
      setBooks(summary);
    });
  }, []);

  useEffect(() => {
    if (!idx || !query.trim()) {
      setMatches([]);
      return;
    }
    const results = idx
      .search(
        query
          .trim()
          .split(/\s+/)
          .join(" ")
      )
      .map(r => books.find(b => b.id === r.ref)!)
      .filter(Boolean);
    setMatches(results);
  }, [query, idx, books]);

  return (
    <div>
      <input
        type="search"
        placeholder="Search title or author…"
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{ width: "100%", padding: "0.5rem" }}
      />

      <ul>
        {matches.map(b => (
          <li key={b.id}>
            <strong>{b.title}</strong> — {b.author}
          </li>
        ))}
      </ul>
    </div>
  );
}