import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  // Renk değişimi için state
  const [bgColor, setBgColor] = useState("#f5f5dc");

  useEffect(() => {
    // Arka plan rengini sürekli değiştiren bir interval
    const colors = [
        "#f5f5dc", "#ffefd5", "#faf0e6", "#ffe4c4",
        "#fff8e1", "#ffe5b4", "#f0e68c"," #e6cc8b",
        "#d8bfd8", "#c8a2c8", "#4682b4", "#7fff00"];
    let index = 0;
    const interval = setInterval(() => {
      setBgColor(colors[index]);
      index = (index + 1) % colors.length; // Sırayla renkleri döndür
    }, 2000);

    return () => clearInterval(interval); // Bileşen temizlenirken interval'i durdur
  }, []);

  // Stiller
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh", // Minimum yüksekliği tam ekran yap
    width: "100%", // Genişlik tam ekran
    backgroundColor: bgColor, // Arka plan rengi animasyonlu
    transition: "background-color 1s ease-in-out", // Geçiş efekti
    overflow: "hidden", // Kaydırma çubuğunu engelle
    margin: "0", // Varsayılan tarayıcı marginlerini sıfırla
  };

  const formStyle = {
    background: "white",
    padding: "40px 50px", // Daha geniş padding
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "400px", // Daha geniş form
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
    backgroundColor: "#ff0000", // Buton kırmızı
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    width: "100%",
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: "#cc0000", // Hover sırasında daha koyu kırmızı
  };

  const linkStyle = {
    color: "#ff0000", // Linkler de kırmızı
    textDecoration: "underline",
    fontSize: "14px",
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Giriş Yap</h2>
        <form>
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
            Giriş Yap
          </button>
        </form>
        <div style={{ marginTop: "10px" }}>
          <span>Hesabınız yok mu? </span>
          <Link to="/register" style={linkStyle}>
            Kayıt Ol
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
