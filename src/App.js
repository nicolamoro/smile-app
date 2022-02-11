import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import NavigationBar from "./components/NavigationBar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

const App = () => {
  const userData = useSelector((state) => state.user);

  return (
    <React.Fragment>
      <NavigationBar userData={userData} />
      <Container fluid className="p-0 pb-5">
        <Row className="m-0">
          <SideBar userData={userData} />
          <main className="p-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </Row>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default App;
