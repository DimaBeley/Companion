import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// eslint-disable-next-line no-undef
test("simple running test", () => {
  render(<App />);
  const mainPanel = screen.getByText(/Main page/i);
  // eslint-disable-next-line no-undef
  expect(mainPanel).toBeInTheDocument();
});
