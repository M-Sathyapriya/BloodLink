function AdminNavbar() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 20px",
      background: "#fff",
      borderBottom: "1px solid #ddd",
      position: "sticky",
      top: 0,
      zIndex: 10
    }}>
      <h2 style={{ color: "#B30E08" }}>Blood Bank Management</h2>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <span>🔔</span>
        <span>👤 Admin</span>
      </div>
    </div>
  );
}

export default AdminNavbar;
