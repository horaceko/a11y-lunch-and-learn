import React from "react";
import { render, screen } from "@testing-library/react";
import A11y from "../pages/a11y";

describe("A11y", () => {
  beforeEach(() => {
    render(<A11y />);
  });

  it("contains accessible buttons", () => {
    expect(screen.getByRole("button", { name: /accessible/i })).toBeTruthy();
  });

  it("has the right checkboxes", () => {
    expect(screen.getByLabelText(/enable proton torpedoes/i)).toBeTruthy();
  });

  it("has a picture of my cat", () => {
    expect(screen.getByRole("img", { name: /horace's cat/i })).toBeTruthy();
  });
});
