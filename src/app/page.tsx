import SearchBar from "@/components/SearchBar";

export default function LibraryPage() {
  return (
    <main style={{ padding: "2rem 1rem", maxWidth: 800, margin: "0 auto" }}>
      <h2>Library Catalog</h2>
      <SearchBar />
    </main>
  );
}