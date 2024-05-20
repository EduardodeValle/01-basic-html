import { render, screen } from "@testing-library/react";
import NavBar from "./navbar";
import { describe, test, expect } from "vitest";

describe("NavBar component", () => {
  test("renders the Home and Favorites links", () => {
    render(<NavBar />);

    const homeLink = screen.getByText("Home");
    const favoritesLink = screen.getByText("Favorites");

    expect(homeLink).toBeInTheDocument();
    expect(favoritesLink).toBeInTheDocument();

    expect(homeLink).toHaveAttribute("href", "/");
    expect(favoritesLink).toHaveAttribute("href", "/favorites");

    expect(homeLink).toHaveClass(
      "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
    );
    expect(favoritesLink).toHaveClass(
      "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
    );
  });
});
