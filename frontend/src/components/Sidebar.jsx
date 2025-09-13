import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
  Box,
  Divider,
  Avatar,
} from "@mui/material";
import {
  FaBars,
  FaChevronLeft,
  FaSignOutAlt,
  FaUserAlt,
  FaHandHoldingHeart,
  FaHospital,
  FaFlask,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const menuItems = [
  { name: "Dashboard", path: "/admin", icon: <MdDashboard size={20} /> },
  { name: "Donor Management", path: "/admin/donors", icon: <FaUserAlt size={18} /> },
  { name: "Recipient Management", path: "/admin/recipients", icon: <FaHandHoldingHeart size={18} /> },
  { name: "Hospital Management", path: "/admin/hospitals", icon: <FaHospital size={18} /> },
  { name: "Blood Bank Management", path: "/admin/bloodbanks", icon: <FaFlask size={18} /> },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const [hovered, setHovered] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("User logged out");
    navigate("/");
  };

  const isExpanded = open || hovered;

  return (
    <Box
      sx={{
        width: isExpanded ? "260px" : "70px",
        transition: "width 0.3s ease-in-out",
        height: "100vh",
        background: "linear-gradient(180deg, #8a0c0c 0%, #B30E08 100%)",
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        zIndex: 1000,
        boxShadow: "4px 0 10px rgba(0, 0, 0, 0.15)",
        overflowX: "auto",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: isExpanded ? "space-between" : "center",
          padding: "18px 20px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        {isExpanded && (
          <Typography
            variant="h6"
            sx={{
              color: "white",
              margin: 0,
              fontWeight: "bold",
              fontSize: "1.4rem",
              background: "linear-gradient(45deg, #ffffff, #ffcccc)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            BLOODLINK
          </Typography>
        )}
        <Tooltip title={open ? "Collapse" : "Expand"} placement="right">
          <IconButton
            onClick={() => setOpen(!open)}
            sx={{
              color: "white",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
            }}
          >
            {open ? <FaChevronLeft /> : <FaBars />}
          </IconButton>
        </Tooltip>
      </Box>

      {/* User Profile Summary */}
      {isExpanded && (
        <Box
          sx={{
            padding: "16px 20px",
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Avatar
            sx={{
              width: 45,
              height: 45,
              backgroundColor: "white",
              marginRight: "12px",
              color: "#B30E08",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            A
          </Avatar>
          <Box>
            <Typography variant="body1" sx={{ color: "white", fontWeight: "500" }}>
              Admin User
            </Typography>
            <Typography variant="caption" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
              Administrator
            </Typography>
          </Box>
        </Box>
      )}

      {/* Menu */}
      <List sx={{ flex: 1, padding: "16px 12px" }}>
        {menuItems.map((item, idx) => {
          const isActive = location.pathname === item.path;
          return (
            <Tooltip key={idx} title={!isExpanded ? item.name : ""} placement="right">
              <ListItem
                button
                component={Link}
                to={item.path}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "8px",
                  marginBottom: "6px",
                  padding: "12px 16px",
                  backgroundColor: isActive ? "white" : "transparent",
                  color: isActive ? "#B30E08" : "white",
                  "&:hover": {
                    backgroundColor: isActive ? "white" : "rgba(255, 255, 255, 0.1)",
                    color: isActive ? "#B30E08" : "#000000", // black on hover
                  },
                  transition: "all 0.2s ease",
                }}
              >
                <ListItemIcon sx={{ color: "inherit", minWidth: "40px" }}>
                  {item.icon}
                </ListItemIcon>
                {isExpanded && (
                  <ListItemText
                    primary={item.name}
                    sx={{
                      "& .MuiTypography-root": {
                        fontWeight: isActive ? "600" : "400",
                        fontSize: "0.95rem",
                        color: "inherit", // follows parent color
                      },
                    }}
                  />
                )}
                {isActive && isExpanded && (
                  <Box
                    sx={{
                      width: 4,
                      height: 20,
                      backgroundColor: "#B30E08", // red active indicator
                      borderRadius: "2px 0 0 2px",
                      position: "absolute",
                      right: 0,
                    }}
                  />
                )}
              </ListItem>
            </Tooltip>
          );
        })}
      </List>

      <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />

      {/* Logout */}
      <Box sx={{ margin: "16px 12px 20px 12px" }}>
        <Tooltip title={!isExpanded ? "Logout" : ""} placement="right">
          <ListItem
            button
            onClick={handleLogout}
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: "8px",
              padding: "12px 16px",
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "#000000", // black on hover
              },
            }}
          >
            <ListItemIcon sx={{ color: "inherit", minWidth: "40px" }}>
              <FaSignOutAlt size={18} />
            </ListItemIcon>
            {isExpanded && (
              <ListItemText
                primary="Logout"
                sx={{
                  "& .MuiTypography-root": {
                    fontSize: "0.95rem",
                    color: "inherit",
                  },
                }}
              />
            )}
          </ListItem>
        </Tooltip>
      </Box>

      {/* Version Info */}
      {isExpanded && (
        <Box sx={{ padding: "0 20px 16px 20px" }}>
          <Typography
            variant="caption"
            sx={{
              color: "rgba(255, 255, 255, 0.5)",
              textAlign: "center",
              display: "block",
            }}
          >
            v2.1.0
          </Typography>
        </Box>
      )}
    </Box>
  );
}
