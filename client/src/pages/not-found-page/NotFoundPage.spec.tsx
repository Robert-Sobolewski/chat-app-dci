import React from "react";
import NotFoundPage from "./NotFoundPage";
import { screen, render, fireEvent } from "@testing-library/react";

describe("test page not found", () => {
  test("render page", () => {
    render(<NotFoundPage />);

    let header = screen.getByText(/Error 404 - Page Not Found/i);

    expect(header).toBeInTheDocument();
  });
});
