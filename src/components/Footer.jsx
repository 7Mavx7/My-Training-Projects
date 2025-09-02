import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} مطعم المذاق الشهي 🍔 - جميع الحقوق محفوظة</p>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#111",
    color: "#fff",
    textAlign: "center",
    padding: "15px 0",
    marginTop: "30px",
    fontSize: "14px",
  },
};

export default Footer;
