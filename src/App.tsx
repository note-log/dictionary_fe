/*
 * @Author: SnowWarri0r
 * @LastModifiedBy: SnowWarri0r
 * @GithubUser: SnowWarri0r
 * @Date: 2022-09-07 09:43:53
 * @Company: ncuhome
 * @LastEditTime: 2022-09-09 11:16:24
 * @FilePath: \notelog_fe\src\App.tsx
 * @Description:
 */
import "@/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import { ThemeOptions, createTheme, ThemeProvider } from "@mui/material/styles";
import SignUp from "@pages/SignUp";
import SignIn from "@pages/SignIn";
import { GlobalToast } from "@components/Toast";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#55998a",
    },
    secondary: {
      main: "#995563",
    },
    error: {
      main: "#559968",
    },
    warning: {
      main: "#558699",
    },
    info: {
      main: "#556399",
    },
    success: {
      main: "#8a5599",
    },
  },
};
const theme = createTheme(themeOptions);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalToast />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
