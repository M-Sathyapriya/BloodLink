function Card({ title, value, subtitle }) {
  return (
    <div style={{
      padding: "20px",
      background: "#fff",
      borderRadius: "8px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      minWidth: "220px"
    }}>
      <h3 style={{ margin: 0, color: "#B30E08" }}>{title}</h3>
      <h1 style={{ margin: "10px 0" }}>{value}</h1>
      <p style={{ margin: 0, fontSize: "14px", color: "#666" }}>{subtitle}</p>
    </div>
  );
}

export default Card;
