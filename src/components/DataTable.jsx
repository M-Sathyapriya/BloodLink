import { Table, TableHead, TableRow, TableCell, TableBody, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function DataTable({ columns, rows }) {
  return (
    <Table sx={{ marginTop: 3 }}>
      <TableHead>
        <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
          {columns.map((col, idx) => (
            <TableCell key={idx} sx={{ fontWeight: "bold" }}>{col}</TableCell>
          ))}
          <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, idx) => (
          <TableRow key={idx}>
            {columns.map((col, cidx) => (
              <TableCell key={cidx}>{row[col]}</TableCell>
            ))}
            <TableCell>
              <IconButton color="warning"><EditIcon /></IconButton>
              <IconButton color="error"><DeleteIcon /></IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default DataTable;
