/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";
import { getStaticPaths } from "next/dist/build/templates/pages";

describe("Page", () => {
  it("renders", async () => {
    render(<Page params={Promise.resolve({ slug: "test" })} />);
    expect(screen.getByText("Slug: test")).toBeInTheDocument();
  });
});

describe("getStaticPaths", () => {
  it("returns paths", async () => {
    const paths = await getStaticPaths();
    expect(paths).toEqual([{ params: { slug: "test" } }]);
  });
});
  