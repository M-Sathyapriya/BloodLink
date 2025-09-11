import { useState } from "react";
import { Box, Grid, Card, CardContent, Typography, Button, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

export default function DonorManagement() {
  const [donors] = useState([
    { name: "Sathya", age: 20, bloodGroup: "B+", lastDonation: "15/05/25" },
    { name: "Vishali", age: 19, bloodGroup: "O+", lastDonation: "02/01/25" },
    { name: "Jana", age: 21, bloodGroup: "A+", lastDonation: "05/12/24" },
    { name: "Jothikumar", age: 22, bloodGroup: "AB+", lastDonation: "07/09/24" },
    { name: "Livinkumar", age: 23, bloodGroup: "O-", lastDonation: "17/12/24" },
  ]);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f9f9f9" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flex: 1,
          ml: { xs: "70px", md: "240px" }, // adjust based on sidebar
          p: 3,
        }}
      >
        {/* Header */}
        <Header title="Donor Management" />

        {/* Stats Section */}
        <Grid container spacing={2} sx={{ my: 2 }}>
          {/* Total Donors Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderLeft: "6px solid #B30E08", borderRadius: "12px", boxShadow: 2 }}>
              <CardContent>
                <Typography variant="h6" color="text.secondary">
                  Total Donors
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: "bold", color: "#B30E08" }}>
                  573
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Growth Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: "12px", boxShadow: 2, bgcolor: "#B30E08", color: "white" }}>
              <CardContent>
                <Typography variant="h6">10% increase</Typography>
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
                <TableCell sx={{ fontWeight: "bold" }}>Donor Name</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Age</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Blood Group</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Last Donation Date</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {donors.map((donor, idx) => (
                <TableRow key={idx}>
                  <TableCell>{donor.name}</TableCell>
                  <TableCell>{donor.age}</TableCell>
                  <TableCell>{donor.bloodGroup}</TableCell>
                  <TableCell>{donor.lastDonation}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<EditIcon />}
                      sx={{
                        mr: 1,
                        borderColor: "#B30E08",
                        color: "#B30E08",
                        "&:hover": { bgcolor: "#fbe9e7", borderColor: "#B30E08" },
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
          onClick={() => (window.location.href = `/donors/${donor.name.toLowerCase()}`)}
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
