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
import { useNavigate } from "react-router-dom";

const bloodBanks = [
  {
    name: "KG Hospital Blood Bank",
    address:
      "121, Ayyappa Chetty St, tambaram\nChennai, Tamil Nadu 600001.\n(Private)",
    phone: "+91 987654321",
    viewPath: "/view", // ✅ Route for first
  },
  {
    name: "IMA Rotary Midtown Mahaveer Blood Bank",
    address:
      "122, Kariyappa St, Perumalpet,\nPurasaiwakkam, Chennai,\nTamil Nadu 600007.",
    phone: "+91 987654321",
    viewPath: "/view2", // ✅ Route for second
  },
  {
    name: "G.Kuppusamy Naidu Memorial Hospital Blood Bank",
    address:
      "Rajaji Salai, 1, Rajaji Rd,\nChennai Port Trust,\nChennai, Tamil Nadu 600003",
    phone: "+91 987654321",
    viewPath: "/view3", // ✅ Route for third
  },
];

const BloodBankList = () => {
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
          BLOOD BANK LIST
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
                Blood Bank Name
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "red" }}>
                Address and blood center type
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
            {bloodBanks.map((bank, index) => (
              <TableRow key={index}>
                <TableCell>{bank.name}</TableCell>
                <TableCell style={{ whiteSpace: "pre-line" }}>
                  {bank.address}
                </TableCell>
                <TableCell>{bank.phone}</TableCell>
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
                    onClick={() => navigate(bank.viewPath)}
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
                        bank.address
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

export default BloodBankList;
