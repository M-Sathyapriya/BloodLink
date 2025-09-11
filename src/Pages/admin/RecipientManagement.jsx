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

export default function RecipientManagement() {
  const [recipients] = useState([
    { name: "Ravi", age: 40, bloodGroup: "B+", requestDate: "2025-02-20", status: "Pending" },
    { name: "Meena", age: 32, bloodGroup: "AB-", requestDate: "2025-01-15", status: "Approved" },
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
                  800
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
                <Typography variant="h6">Stable</Typography>
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
                <TableCell sx={{ fontWeight: "bold" }}>Age</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Blood Group</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Request Date</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {recipients.map((rec, idx) => (
                <TableRow key={idx}>
                  <TableCell>{rec.name}</TableCell>
                  <TableCell>{rec.age}</TableCell>
                  <TableCell>{rec.bloodGroup}</TableCell>
                  <TableCell>{rec.requestDate}</TableCell>
                  <TableCell>{rec.status}</TableCell>
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
                      (window.location.href = `/recipients/${rec.name.toLowerCase()}`)
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
