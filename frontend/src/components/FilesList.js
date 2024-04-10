import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { fetchFiles } from "../redux/actions/fileActions";

const FilesList = () => {
  const dispatch = useDispatch();
  const files = useSelector((state) => state.file.files);

  useEffect(() => {
    dispatch(fetchFiles());
  }, [dispatch]);

  return (
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
  );
};

export default FilesList;
