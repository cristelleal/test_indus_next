/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

describe("Page", () => {
  it("renders", async () => {
    render(<Page params={Promise.resolve({ slug: "test" })} />);
    expect(screen.getByText("Slug: test")).toBeInTheDocument();
  });
});
