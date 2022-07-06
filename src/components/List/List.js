import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import { listStyle } from "./listStyle";

const List = ({ list, loading, deleteAddress }) => {
  const classes = listStyle();
  return (
    <div className={classes.root}>
      <h2>Address List</h2>
      {loading ? (
        <CircularProgress />
      ) : (
        <TableContainer className={classes.tableContainer} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Area</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Floor Number</TableCell>
                <TableCell>Apartment Number</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list?.map((address) => (
                <TableRow
                  key={address.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  className={classes.tableRow}
                >
                  <TableCell component="th" scope="row">
                    {address.id}
                  </TableCell>
                  <TableCell>{address.area}</TableCell>
                  <TableCell>{address.name}</TableCell>
                  <TableCell>{address.description}</TableCell>
                  <TableCell>{address.floor_number}</TableCell>
                  <TableCell>{address.apartment_number}</TableCell>
                  <TableCell>
                    <Stack spacing={1} direction="row">
                      <Link
                        to={`/edit/${address.id}`}
                        state={address}
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          className={classes.btn}
                          color="info"
                          variant="contained"
                        >
                          Edit
                        </Button>
                      </Link>
                      <Button
                        className={classes.btn}
                        color="error"
                        variant="contained"
                        onClick={() => {
                          deleteAddress(address.id);
                        }}
                      >
                        Delete
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default List;
