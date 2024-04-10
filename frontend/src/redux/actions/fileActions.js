export const fetchFiles =
  (fileName = "") =>
  async (dispatch) => {
    let url = "http://localhost:4000/files/data";
    if (fileName) {
      url += `?fileName=${encodeURIComponent(fileName)}`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({
        type: "FETCH_FILES_SUCCESS",
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
