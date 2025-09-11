import { AppBar, Toolbar, IconButton, Box, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function Header({ title }) {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" color="error" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Box>
          <IconButton><NotificationsIcon /></IconButton>
          <IconButton><AccountCircle /></IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
