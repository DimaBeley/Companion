import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("simple running test", () => {
  render(<App />);
  const mainPanel = screen.getByText(/Main page/i);
  expect(mainPanel).toBeInTheDocument();
});
