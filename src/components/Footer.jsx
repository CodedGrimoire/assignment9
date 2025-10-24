import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: 24,
        padding: "24px 40px",
        borderTop: "1px solid #ddd",
        fontFamily: "sans-serif",
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* Left side - Contact info */}
      <div style={{ flex: 1, minWidth: "250px" }}>
        <h4 style={{ marginBottom: 8 }}>Contact Us</h4>
        <p>
          Email:{" "}
          <a href="mailto:contact@skillshare.com" style={{ color: "#2563eb", textDecoration: "none" }}>
            contact@skillshare.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <a href="tel:+123456789" style={{ color: "#2563eb", textDecoration: "none" }}>
            +123-456-789
          </a>
        </p>
      </div>

      {/* Right side - Socials + Privacy */}
      <div style={{ textAlign: "right", flex: 1, minWidth: "250px" }}>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 16, marginBottom: 12 }}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              style={{ width: 28, height: 28 }}
            />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/60/Twitter_Logo_2012.svg"
              alt="Twitter"
              style={{ width: 28, height: 28 }}
            />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              style={{ width: 28, height: 28 }}
            />
          </a>
        </div>

        <Link to="/privacy-policy" style={{ textDecoration: "none", color: "#333", display: "block" }}>
          Privacy Policy
        </Link>
        <p style={{ marginTop: 8, fontSize: 14, color: "#555" }}>
          &copy; 2025 SkillShare. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
