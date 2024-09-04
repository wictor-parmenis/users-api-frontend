import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/nav-bar";
import { AuthProvider } from "./context/auth";
import Home from "./pages/authenticated/home";
import Login from "./pages/no-auth/login";
import SignUp from "./pages/no-auth/sign-up";
import theme from "./theme";

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <NavBar />
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
