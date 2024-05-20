import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CharacterCard from "./CharacterCard";

import { CharacterProps } from "../types";

interface CharacterCardProps {
  character: CharacterProps;
}

test("renders CharacterCard with correct props", () => {
  // Mock character data

  const character: CharacterCardProps = {
    character: {
      id: 123,
      isFavorite: false,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "Mad scientist",
      gender: "Male",
      image: "/rick.png",
      location: {
        name: "Earth",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1",
      },
    },
  };

  // Render CharacterCard component with mock character data
  render(<CharacterCard {...character} />);

  // Assert that the component renders correctly
  expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
  expect(screen.getByText("Alive - Human")).toBeInTheDocument();
  expect(screen.getByText("Location: Earth")).toBeInTheDocument();
});
