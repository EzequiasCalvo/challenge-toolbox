export const fetchFiles = () => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:4000/files/data");
    const data = await response.json();
    dispatch({
      type: "FETCH_FILES_SUCCESS",
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};
