import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  // Arka plan rengini dinamik olarak değiştiren state
  const [backgroundColor, setBackgroundColor] = useState("#f5f5f5");

  useEffect(() => {
    // Arka plan rengini her 1 saniyede bir değiştir
    const colors = ["#f8e6e6", "#e6f8e6", "#e6e6f8", "#f8f8e6"];
    let index = 0;
    const interval = setInterval(() => {
      setBackgroundColor(colors[index]);
      index = (index + 1) % colors.length;
    }, 1000);

    return () => clearInterval(interval); // Temizleme işlemi
  }, []);

  // Stiller
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    width: "100%",
    backgroundColor: backgroundColor, // Dinamik arka plan rengi
    margin: "0",
    transition: "background-color 0.5s ease", // Renk geçiş animasyonu
  };

  const formStyle = {
    background: "white",
    padding: "40px 60px", // Form genişliği artırıldı
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "450px", // Form biraz daha genişletildi
    textAlign: "center",
  };

  const inputStyle = {
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "100%",
    marginBottom: "15px",
  };

  const buttonStyle = {
    padding: "12px",
    fontSize: "16px",
    color: "white",
    backgroundColor: "#ff0000", // Buton kırmızı yapıldı
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    width: "100%",
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: "#cc0000", // Hover için koyu kırmızı
  };

  const linkStyle = {
    color: "#ff0000", // Link kırmızı yapıldı
    textDecoration: "underline",
    fontSize: "14px",
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Kayıt Ol</h2>
        <form>
          <div>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Ad Soyad:
            </label>
            <input
              type="text"
              name="fullname"
              required
              style={inputStyle}
            />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "5px" }}>
              E-Posta:
            </label>
            <input
              type="email"
              name="email"
              required
              style={inputStyle}
            />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Şifre:
            </label>
            <input
              type="password"
              name="password"
              required
              style={inputStyle}
            />
          </div>
          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#cc0000")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff0000")}
          >
            Kayıt Ol
          </button>
        </form>
        <div style={{ marginTop: "10px" }}>
          <span>Hesabınız var mı? </span>
          <Link to="/login" style={linkStyle}>
            Giriş Yap
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
