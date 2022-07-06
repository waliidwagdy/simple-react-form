import { createTheme, ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = createTheme();
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
