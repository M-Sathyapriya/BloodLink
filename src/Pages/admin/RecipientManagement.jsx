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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import axios from "axios";

export default function RecipientManagement() {
  const [recipients, setRecipients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRecipient, setSelectedRecipient] = useState(null);

  useEffect(() => {
    fetchRecipients();
  }, []);

  const fetchRecipients = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/bloodrequest/all");
      console.log("Recipients from API:", res.data);
      setRecipients(res.data);     
    } catch (err) {
      console.error("❌ Error fetching recipients:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this request?")) return;
    try {
      await axios.delete(`http://localhost:3001/api/bloodrequest/delete/${id}`);
      setRecipients((prev) => prev.filter((r) => r._id !== id));
    } catch (err) {
      console.error("❌ Error deleting recipient:", err);
    }
  };

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
        <Header title="Recipient Management" />

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
                  Total Recipients
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: "#B30E08" }}
                >
                  {recipients.length}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
            <CircularProgress />
          </Box>
        ) : (
          <TableContainer component={Paper} sx={{ mt: 3 }}>
            <Table>
              <TableHead sx={{ bgcolor: "#f1f1f1" }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Patient</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Blood Group</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Request Type</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Required Date</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>City</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Urgency</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recipients.length > 0 ? (
                  recipients.map((r) => (
                    <TableRow key={r._id}>
                      <TableCell>
                        {`${r.patientName?.first || ""} ${r.patientName?.last || ""}`}
                      </TableCell>
                      <TableCell>{r.bloodGroup}</TableCell>
                      <TableCell>{r.requestType}</TableCell>
                      <TableCell>
                        {r.requiredDate
                          ? new Date(r.requiredDate).toLocaleDateString()
                          : "N/A"}
                      </TableCell>
                      <TableCell>{r.city}</TableCell>
                      <TableCell>{r.urgency}</TableCell>
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
                          onClick={() => setSelectedRecipient(r)}
                        >
                          Details
                        </Button>
                        <Button
                          variant="contained"
                          size="small"
                          startIcon={<DeleteIcon />}
                          sx={{
                            bgcolor: "#B30E08",
                            "&:hover": { bgcolor: "#a50c07" },
                          }}
                          onClick={() => handleDelete(r._id)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} align="center">
                      No recipient requests found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>

      {/* Details Modal */}
      <Dialog
        open={Boolean(selectedRecipient)}
        onClose={() => setSelectedRecipient(null)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Recipient Details</DialogTitle>
        <DialogContent dividers sx={{ wordBreak: "break-word" }}>
          {selectedRecipient ? (
            <>
              <Typography gutterBottom>
                <strong>Patient Name:</strong>{" "}
                {selectedRecipient.patientName?.first}{" "}
                {selectedRecipient.patientName?.mid || ""}{" "}
                {selectedRecipient.patientName?.last}
              </Typography>
              <Typography gutterBottom>
                <strong>Attendee Name:</strong>{" "}
                {selectedRecipient.attendee?.first}{" "}
                {selectedRecipient.attendee?.mid || ""}{" "}
                {selectedRecipient.attendee?.last}
              </Typography>
              <Typography gutterBottom>
                <strong>Attendee Email:</strong> {selectedRecipient.attendee?.email}
              </Typography>
              <Typography gutterBottom>
                <strong>Attendee Phone:</strong> {selectedRecipient.attendee?.phone}
              </Typography>
              <Typography gutterBottom>
                <strong>Blood Group:</strong> {selectedRecipient.bloodGroup}
              </Typography>
              <Typography gutterBottom>
                <strong>Request Type:</strong> {selectedRecipient.requestType}
              </Typography>
              <Typography gutterBottom>
                <strong>Quantity:</strong> {selectedRecipient.quantity}
              </Typography>
              <Typography gutterBottom>
                <strong>Urgency:</strong> {selectedRecipient.urgency}
              </Typography>
              <Typography gutterBottom>
                <strong>Required Date:</strong>{" "}
                {new Date(selectedRecipient.requiredDate).toLocaleDateString()}
              </Typography>
              <Typography gutterBottom>
                <strong>Hospital Name:</strong> {selectedRecipient.hospitalName}
              </Typography>
              <Typography gutterBottom>
                <strong>Hospital Address:</strong> {selectedRecipient.hospitalAddress}
              </Typography>
              <Typography gutterBottom>
                <strong>City:</strong> {selectedRecipient.city}
              </Typography>
              <Typography gutterBottom>
                <strong>State:</strong> {selectedRecipient.state}
              </Typography>
              <Typography gutterBottom>
                <strong>Pincode:</strong> {selectedRecipient.pincode}
              </Typography>
              <Typography gutterBottom>
                <strong>Note:</strong> {selectedRecipient.note || "N/A"}
              </Typography>
              <Typography gutterBottom sx={{ color: "gray", fontSize: "0.875rem" }}>
                <strong>Created At:</strong>{" "}
                {new Date(selectedRecipient.createdAt).toLocaleString()}
              </Typography>
              <Typography gutterBottom sx={{ color: "gray", fontSize: "0.875rem" }}>
                <strong>Last Updated:</strong>{" "}
                {new Date(selectedRecipient.updatedAt).toLocaleString()}
              </Typography>
            </>
          ) : (
            <Typography>Loading details...</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSelectedRecipient(null)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
