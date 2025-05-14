export default function DonatePage() {
  return (
    <main
      style={{
        padding: "2rem 1rem",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h2>Donate Books</h2>

      <p>If you have books you want to donate, drop them off in the library, then fill out the form below. If you want to donate something else (decoration, equipment, funds, etc.), or need help with logistics, please contact{" "}<a href="mailto:spectre@caltech.edu">spectre@caltech.edu</a>.</p>

      <p>Thanks for your contribution!</p>

      <p>
        If the form doesn’t load,{" "}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd4TW-H-hS8k7kPD3NT9zIWj5iYKEPNRZhcdGdpHf2yPWXwYg/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          open it in a new tab
        </a>
        .
      </p>

      {/* Google Form embed */}
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSd4TW-H-hS8k7kPD3NT9zIWj5iYKEPNRZhcdGdpHf2yPWXwYg/viewform?embedded=true"
        width="100%"
        height="900"
        style={{ border: 0 }}
        loading="lazy"
        title="Book request / donation form"
      />
    </main>
  );
}
