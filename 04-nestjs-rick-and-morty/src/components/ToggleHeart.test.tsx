import { render, screen, fireEvent } from "@testing-library/react";
import ToggleHeart from "./ToggleHeart";

test("toggles heart icon on click", () => {
  render(<ToggleHeart id={1} initialIsFavorite={false} />);
  const heartIcon = screen.getByTestId("heart-icon");
  expect(heartIcon).toHaveAttribute("data-icon", "heart");

  // Click the heart icon to toggle it
  fireEvent.click(heartIcon);

  // Check that the heart is filled after the click
  expect(heartIcon).toHaveAttribute("data-icon", "heart");

  // Click the heart icon again to toggle it back
  fireEvent.click(heartIcon);

  // Check that the heart is not filled again
  expect(heartIcon).toHaveAttribute("data-icon", "heart");
});
