const initialState = {
  files: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "FETCH_FILES_SUCCESS":
      return {
        ...state,
        files: action.payload,
      };
    default:
      return state;
  }
}
