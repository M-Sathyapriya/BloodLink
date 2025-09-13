import { useEffect, useState } from "react";
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
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

export default function DonorManagement() {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);

  // Edit Modal State
  const [openEditModal, setOpenEditModal] = useState(false);
  const [currentDonor, setCurrentDonor] = useState(null);

  // Fetch donor data from backend
  useEffect(() => {
    fetchDonors();
  }, []);

  const fetchDonors = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/donation/all");
      setDonors(response.data);
    } catch (error) {
      console.error("❌ Error fetching donor data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Delete donor
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this donor?")) return;
    try {
      await axios.delete(`http://localhost:3001/api/donation/delete/${id}`);
      setDonors(donors.filter((d) => d._id !== id));
    } catch (error) {
      console.error("❌ Error deleting donor:", error);
      alert("Failed to delete donor");
    }
  };

  // Open Edit Modal
  const handleEditClick = (donor) => {
    setCurrentDonor({ ...donor }); // clone donor object for editing
    setOpenEditModal(true);
  };

  // Handle Edit Form Input Change
  const handleEditChange = (e) => {
    setCurrentDonor({ ...currentDonor, [e.target.name]: e.target.value });
  };

  // Submit Edit
  const handleEditSubmit = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3001/api/donation/update/${currentDonor._id}`,
        currentDonor
      );
      setDonors(
        donors.map((d) =>
          d._id === currentDonor._id ? response.data.donation : d
        )
      );
      setOpenEditModal(false);
    } catch (error) {
      console.error("❌ Error updating donor:", error);
      alert("Failed to update donor");
    }
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f9f9f9" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flex: 1,
          ml: { xs: "70px", md: "240px" },
          p: 3,
        }}
      >
        <Header title="Donor Management" />

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
                  Total Donors
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: "#B30E08" }}
                >
                  {donors.length}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Table Section */}
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
            <CircularProgress />
          </Box>
        ) : (
          <TableContainer component={Paper} sx={{ mt: 3 }}>
            <Table>
              <TableHead sx={{ bgcolor: "#f1f1f1" }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Age</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Gender</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Blood Group</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Contact</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Donation Date</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Location</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Units</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {donors.length > 0 ? (
                  donors.map((donor, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{donor.name}</TableCell>
                      <TableCell>{donor.age}</TableCell>
                      <TableCell>{donor.gender}</TableCell>
                      <TableCell>{donor.bloodGroup}</TableCell>
                      <TableCell>{donor.contact}</TableCell>
                      <TableCell>{donor.email}</TableCell>
                      <TableCell>
                        {new Date(donor.donationDate).toLocaleDateString()}
                      </TableCell>
                      <TableCell>{donor.location}</TableCell>
                      <TableCell>{donor.units}</TableCell>
                      <TableCell>
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<EditIcon />}
                          onClick={() => handleEditClick(donor)}
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
                          onClick={() => handleDelete(donor._id)}
                          sx={{
                            bgcolor: "#B30E08",
                            "&:hover": { bgcolor: "#a50c07" },
                          }}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={10} align="center">
                      No donors found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>

      {/* Edit Modal */}
      <Dialog open={openEditModal} onClose={() => setOpenEditModal(false)}>
        <DialogTitle>Edit Donor</DialogTitle>
        <DialogContent>
          {currentDonor && (
            <>
              <TextField
                margin="dense"
                label="Name"
                name="name"
                value={currentDonor.name}
                onChange={handleEditChange}
                fullWidth
              />
              <TextField
                margin="dense"
                label="Age"
                name="age"
                type="number"
                value={currentDonor.age}
                onChange={handleEditChange}
                fullWidth
              />
              <TextField
                margin="dense"
                label="Contact"
                name="contact"
                value={currentDonor.contact}
                onChange={handleEditChange}
                fullWidth
              />
              <TextField
                margin="dense"
                label="Location"
                name="location"
                value={currentDonor.location}
                onChange={handleEditChange}
                fullWidth
              />
              <TextField
                margin="dense"
                label="Units"
                name="units"
                type="number"
                value={currentDonor.units}
                onChange={handleEditChange}
                fullWidth
              />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditModal(false)}>Cancel</Button>
          <Button variant="contained" sx={{ bgcolor: "#B30E08" }} onClick={handleEditSubmit}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
