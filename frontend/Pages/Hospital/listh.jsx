import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate

const hospitals = [
  {
    name: "Devi Hospital",
    address:
      "37WQ +839,Ayyappa chetty st,Mannadi,George TOwn,\nChennai,Tamil Nadu 6000001",
    phone: "+91 987654321",
    viewPage: "/hospitalview1", // ✅ Navigation path
  },
  {
    name: "Chennai Corporation Hospital",
    address:
      "37Q4+CPJ, Kariyappa St, Perumalpet,\nPurasaiwakkam, Chennai,\nTamil Nadu 600007.",
    phone: "+91 987654321",
    viewPage: "/hospitalview2", // ✅ Navigation path
  },
  {
    name: "Chennai port Trust Hospital",
    address:
      "Rajaji Salai, 1, Rajaji Rd,\nChennai Port Trust,\nChennai, Tamil Nadu 600003",
    phone: "+91 987654321",
    viewPage: "/hospitalview3", // ✅ Navigation path
  },
];

const HospitalList = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "90%" }}>
        {/* Heading */}
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            textDecoration: "underline",
            textDecorationColor: "red",
          }}
        >
          Hospital List
        </Typography>

        {/* Table */}
        <Table
          sx={{
            border: "1px solid black",
            backgroundColor: "transparent",
            "& td, & th": {
              border: "1px solid black",
              backgroundColor: "transparent",
            },
            "& tr": {
              backgroundColor: "transparent",
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", color: "red" }}>
                Hospital Name
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "red" }}>
                Address
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "red" }}>
                Phone no
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "red" }}>
                Details
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "red" }}>
                Get Direction
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {hospitals.map((hospital, index) => (
              <TableRow key={index}>
                <TableCell>{hospital.name}</TableCell>
                <TableCell style={{ whiteSpace: "pre-line" }}>
                  {hospital.address}
                </TableCell>
                <TableCell>{hospital.phone}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: "darkred",
                      borderRadius: "20px",
                      textTransform: "none",
                      "&:hover": { backgroundColor: "red" },
                    }}
                    onClick={() => navigate(hospital.viewPage)} // ✅ Navigate on click
                  >
                    View
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: "darkred",
                      borderRadius: "20px",
                      textTransform: "none",
                      "&:hover": { backgroundColor: "red" },
                    }}
                    onClick={() => {
                      const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
                        hospital.address
                      )}`;
                      window.open(mapUrl, "_blank");
                    }}
                  >
                    Get Direction
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default HospitalList;
