import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import FilesList from "./FilesList";
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          file: "testFile.txt",
          lines: [{ text: "Hello", number: 1, hex: "0x1" }],
        },
      ]),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

it("renders the component and makes a fetch call", async () => {
  render(
    <Provider store={store}>
      <FilesList />
    </Provider>
  );

  await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

  expect(screen.getByText("testFile.txt")).toBeInTheDocument();
});
