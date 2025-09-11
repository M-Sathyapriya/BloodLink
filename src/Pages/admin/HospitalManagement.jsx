import { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

export default function HospitalManagement() {
  const [hospitals] = useState([
    { name: "Apollo Hospital", address: "Chennai", phone: "044-222222" },
    { name: "GH Madurai", address: "Madurai", phone: "0452-333333" },
  ]);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f9f9f9" }}>
      <Sidebar />

      <Box
        component="main"
        sx={{
          flex: 1,
          ml: { xs: "70px", md: "240px" },
          p: 3,
        }}
      >
        <Header title="Hospital Management" />

        {/* Stats Section */}
        <Grid container spacing={2} sx={{ my: 2 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                borderLeft: "6px solid #B30E08",
                borderRadius: "12px",
                boxShadow: 2,
              }}
            >
              <CardContent>
                <Typography variant="h6" color="text.secondary">
                  Total Hospitals
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: "#B30E08" }}
                >
                  50
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                borderRadius: "12px",
                boxShadow: 2,
                bgcolor: "#B30E08",
                color: "white",
              }}
            >
              <CardContent>
                <Typography variant="h6">+2 New</Typography>
                <Typography variant="body2">Compared to last month</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Data Table */}
        <TableContainer component={Paper} sx={{ mt: 3 }}>
          <Table>
            <TableHead sx={{ bgcolor: "#f1f1f1" }}>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Address</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Phone No</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {hospitals.map((hospital, idx) => (
                <TableRow key={idx}>
                  <TableCell>{hospital.name}</TableCell>
                  <TableCell>{hospital.address}</TableCell>
                  <TableCell>{hospital.phone}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<EditIcon />}
                      sx={{
                        mr: 1,
                        borderColor: "#B30E08",
                        color: "#B30E08",
                        "&:hover": {
                          bgcolor: "#fbe9e7",
                          borderColor: "#B30E08",
                        },
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      startIcon={<DeleteIcon />}
                      sx={{
                        bgcolor: "#B30E08",
                        "&:hover": { bgcolor: "#a50c07" },
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                  <TableCell>
        <Button
          variant="contained"
          size="small"
          sx={{
            bgcolor: "#B30E08",
            "&:hover": { bgcolor: "#a50c07" },
          }}
onClick={() =>
  (window.location.href = `/hospitals/${hospital.name.toLowerCase()}`)
}
        >
          Details
        </Button>
      </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
