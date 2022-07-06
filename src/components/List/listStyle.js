import { makeStyles } from "@mui/styles";

export const listStyle = makeStyles((theme) => ({
  root: {
    width: "80%",
    margin: theme.spacing(3.75, "auto"),
  },
  tableContainer: {
    maxWidth: "60%",
    margin: "auto",
    [theme.breakpoints.down(772)]: {
      maxWidth: "100%",
    },
  },
  tableRow: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#d3d3d3b3",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  },
  btn: {
    width: theme.spacing(2),
  },
}));
