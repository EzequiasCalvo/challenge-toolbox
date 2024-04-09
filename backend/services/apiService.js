import https from "https";

const API_KEY = "Bearer aSuperSecretKey";
const BASE_URL = "https://echo-serv.tbxnet.com/v1/secret";

export const fetchFileList = () =>
  new Promise((resolve, reject) => {
    const options = {
      hostname: "echo-serv.tbxnet.com",
      path: "/v1/secret/files",
      method: "GET",
      headers: { Authorization: API_KEY },
    };

    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          const parsedData = JSON.parse(data);
          resolve(parsedData.files);
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on("error", (error) => reject(error));
    req.end();
  });

export const fetchFileContent = (fileName) =>
  new Promise((resolve, reject) => {
    const options = {
      hostname: "echo-serv.tbxnet.com",
      path: `/v1/secret/file/${fileName}`,
      method: "GET",
      headers: { Authorization: API_KEY },
    };

    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve(data));
    });

    req.on("error", (error) => reject(error));
    req.end();
  });
