import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
        padding: "24px 16px",
        borderTop: "1px solid #ddd",
        fontFamily: "sans-serif",
        backgroundColor: "#f9f9f9",
        marginTop: "auto", // Ensure it stays at the bottom
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h4>Contact Us</h4>
        <p>Email: <a href="mailto:contact@skillshare.com">contact@skillshare.com</a></p>
        <p>Phone: <a href="tel:+123456789">+123-456-789</a></p>
      </div>

      <div style={{ display: "flex", gap: 16, marginTop: 8 }}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt="Facebook"
            style={{ width: 24, height: 24 }}
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/60/Twitter_Logo_2012.svg"
            alt="Twitter"
            style={{ width: 24, height: 24 }}
          />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram"
            style={{ width: 24, height: 24 }}
          />
        </a>
      </div>

      <div style={{ marginTop: 16 }}>
        <Link to="/privacy-policy" style={{ textDecoration: "none", color: "#333" }}>
          Privacy Policy
        </Link>
      </div>

      <div style={{ marginTop: 12 }}>
        <p>&copy; 2025 SkillShare. All rights reserved.</p>
      </div>
    </footer>
  );
}
