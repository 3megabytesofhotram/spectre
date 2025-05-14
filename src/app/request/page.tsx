export default function RequestPage() {
  return (
    <main
      style={{
        padding: "2rem 1rem",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h2>Request Books</h2>

      <p>Make suggestions for additions to the library here!</p>

      <p>
        If the form doesn’t load,{" "}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfJq2Xc0g29Uta88vlwpWXe7FivlVujDlw1Hgqh83Vmc64ZLQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          open it in a new tab
        </a>
        .
      </p>

      {/* Google Form embed */}
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfJq2Xc0g29Uta88vlwpWXe7FivlVujDlw1Hgqh83Vmc64ZLQ/viewform?embedded=true"
        width="100%"
        height="900"
        style={{ border: 0 }}
        loading="lazy"
        title="Book request / donation form"
      />
    </main>
  );
}
