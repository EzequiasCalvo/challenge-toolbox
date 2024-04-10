import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Form, Button, Row, Col } from "react-bootstrap";
import { fetchFiles } from "../redux/actions/fileActions";

const FilesList = () => {
  const dispatch = useDispatch();
  const files = useSelector((state) => state.file.files);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(fetchFiles());
  }, [dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchFiles(filter));
  };

  return (
    <>
      <Form>
        <Form.Group controlId="fileNameFilter">
          <Row className="mt-4 mb-2">
            <Col>
              <Form.Control
                type="text"
                placeholder="Filter by file name"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
            </Col>
            <Col>
              <Button className="btn-dark" type="submit" onClick={handleSearch}>
                Search
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
      {files.length ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>File Name</th>
              <th>Text</th>
              <th>Number</th>
              <th>Hex</th>
            </tr>
          </thead>
          <tbody>
            {files.map(({ file, lines }, fileIndex) => {
              if (lines.length === 0) return null;
              return lines.map(({ text, number, hex }, lineIndex) => (
                <tr key={`${fileIndex}-${lineIndex}`}>
                  <td>{file}</td>
                  <td>{text}</td>
                  <td>{number}</td>
                  <td>{hex}</td>
                </tr>
              ));
            })}
          </tbody>
        </Table>
      ) : (
        <p>No files found</p>
      )}
    </>
  );
};

export default FilesList;
