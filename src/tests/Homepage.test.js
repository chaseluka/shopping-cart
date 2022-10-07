import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Homepage from "./Homepage";

describe("SHOP NOW", () => {
  it("renders shop page", () => {
    render(<Homepage />);
    const shop = screen.getByRole("div", { name: "SHOP NOW" });
    const rendered = userEvent.click(shop);
    expect(rendered.container.querySelector("#shop")).toBeNull();
  });
});
