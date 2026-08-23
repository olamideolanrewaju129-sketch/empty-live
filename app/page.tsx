import Image from "next/image";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "24px" }}>
      <div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Mariam</h1>
        <p style={{ marginTop: "8px", color: "#555" }}>
          I turn data-heavy SaaS products into interfaces that feel simple to use.
        </p>
      </div>
    </main>
  );
}
