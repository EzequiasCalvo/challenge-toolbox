import React from "react";
import { Container } from "react-bootstrap";
import "./app.css";
import FilesList from "./components/FilesList";

const App = () => (
  <>
    <h1 className="custom-title text-white fs-4 p-2">React test app</h1>
    <Container>
      <FilesList />
    </Container>
  </>
);

export default App;
