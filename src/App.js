import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import NavigationBar from "./components/NavigationBar";
import SideBar from "./components/SideBar";
import { Container, Row } from "react-bootstrap";
import Footer from "./components/Footer";

const App = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <Container fluid className="p-0 pb-5">
        <Row className="m-0">
          <SideBar />
          <main className="p-0">
            <Routes>
              <Route path="/" element={<Home />} />
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
