import { expect, test } from "vitest";

import { cn } from "./utils";

test("cn merges conflicting Tailwind classes", () => {
  expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4");
});
