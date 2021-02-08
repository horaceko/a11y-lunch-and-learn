import React from "react";
import { render, screen } from "@testing-library/react";
import NonA11y from "../pages/nona11y";

describe("NonA11y", () => {
  beforeEach(() => {
    render(<NonA11y />);
  });

  it("contains accessible buttons", () => {
    // Will fail because we can't find an element with a "button" role
    expect(screen.getByRole("button", { name: /inaccessible/ })).toBeTruthy();
  });

  it("has the right checkboxes", () => {
    // Will fail because we can't find the associated checkbox
    expect(screen.getByLabelText(/enable lasers/i)).toBeTruthy();
  });

  it("has a picture of my cat", () => {
    // Will fail because alt-text is not present
    expect(screen.getByRole("img", { name: /horace's cat/i })).toBeTruthy();
  });
});
