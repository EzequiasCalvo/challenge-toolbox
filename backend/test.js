import chai from "chai";
import chaiHttp from "chai-http";
import { server } from "./index.js";

chai.use(chaiHttp);
const { expect } = chai;

describe("Files Data API", () => {
  describe("GET /files/data", () => {
    // Test for successful response
    it("should GET all files data with valid structure", (done) => {
      chai
        .request(server)
        .get("/files/data")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("array");
          done();
        });
    });

    // Test to ensure no invalid lines are included
    it("should filter out invalid lines", (done) => {
      chai
        .request(server)
        .get("/files/data")
        .end((err, res) => {
          const allLinesValid = res.body.every((file) =>
            file.lines.every(
              (line) =>
                line.text &&
                line.number &&
                line.hex &&
                Object.keys(line).every((key) =>
                  ["text", "number", "hex"].includes(key)
                )
            )
          );
          expect(allLinesValid).to.be.true;
          done();
        });
    });

    // Test to ensure the 'file' property is removed from lines
    it('should not include "file" property in lines', (done) => {
      chai
        .request(server)
        .get("/files/data")
        .end((err, res) => {
          const filePropertyPresent = res.body.some((file) =>
            file.lines.some((line) => line.hasOwnProperty("file"))
          );
          expect(filePropertyPresent).to.be.false;
          done();
        });
    });
  });
});
