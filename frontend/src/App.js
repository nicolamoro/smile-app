import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import NavigationBar from "./components/NavigationBar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import LoadingOverlay from "./components/LoadingOverlay";
import { useLoadingSelector } from "./store/selectors/loading";

const App = () => {
  const loadingData = useLoadingSelector();

  return (
    <React.Fragment>
      <NavigationBar />
      <Container fluid className="p-0 pb-5">
        <Row className="m-0">
          {loadingData && <LoadingOverlay />}
          <SideBar />
          <main className="p-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Cart />} />
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
