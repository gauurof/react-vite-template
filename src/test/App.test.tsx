import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { App } from "@/App";

describe("App", () => {
  it("renders the project title and tooling list", () => {
    render(<App />);

    const title = screen.getByRole("heading", {
      level: 1,
      name: "Template Project",
    });
    expect(title.textContent).toBe("Template Project");
    expect(screen.getByRole("heading", { level: 2, name: "Tooling" })).toBeDefined();
    expect(screen.getByText(/oxlint: /).textContent).toContain("replacing ESLint");
  });
});
