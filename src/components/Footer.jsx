import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        display: "flex",

         flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "flex-start",
       
        gap: 25,
        padding: "24px 40px",
        borderTop: "1px solid #cac8c8ff",
       
        backgroundColor: "white",
      }}
    >
     
      <div style={{ flex: 1, minWidth: "250px" }}>
        <h4 style={{ marginBottom: 8 }}>Contact Us</h4>


        <p>
          Email:{" "}
          <a href="mailto:contact@skillshare123.com" style={{ color: "#5583e6ff", textDecoration: "none" }}>
            contact@skillshare123.com
          </a>
        </p>

        <p>
          Phone:{" "}
          <a href="tel:+123456789" style={{ color: "#5583e6ff", textDecoration: "none" }}>
           018123456789
          </a>
        </p>

      </div>

      <div style={{ textAlign: "right", flex: 1, minWidth: "250px" }}>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 16, marginBottom: 12 }}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">


            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"

              alt=""
              style={{ width: 29, height: 28 }}
            />
          </a>
         


          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"


              alt=""
              style={{ width: 28, height: 29 }}
            />
          </a> </div>
       

        <Link to="/privacy-policy" style={{ textDecoration: "none", color: "black", display: "block" }}>

          Privacy Policy
        </Link>
        <p style={{ marginTop: 8, fontSize: 14, color: "#777373ff" }}>
          &copy; 2025 SkillShare. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
