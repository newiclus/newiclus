import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-react";

import App from "../App";

describe("App", () => {
  it("renders the App component", async () => {
    const { getByText } = render(<App />);

    const jsText = getByText(/Javascript/i);
    await expect.element(jsText).toBeInTheDocument();
  });
});
