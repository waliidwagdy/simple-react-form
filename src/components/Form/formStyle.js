import { makeStyles } from "@mui/styles";
export const formStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginBottom: theme.spacing(7.5),
  },
  header: { textAlign: "center" },
  formContainer: {
    width: theme.spacing(80),
    margin: "auto",
    padding: theme.spacing(4),
    [theme.breakpoints.down(772)]: {
      width: "80%",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1.25),
  },
  btn: {
    width: theme.spacing(20.5),
    margin: "auto !important",
    fontSize: "18px !important",
    marginTop: "10px !important",
  },
  error: {
    color: "red",
  },
}));
