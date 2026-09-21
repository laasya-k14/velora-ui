import { afterEach, expect, test, vi } from "vitest";

import { version } from "../../../package.json";
import { dynamic, GET } from "./route";

afterEach(() => {
  vi.restoreAllMocks();
});

test("is prerendered so the static export can include /health", () => {
  expect(dynamic).toBe("force-static");
});

test("GET returns JSON with process uptime and package version", async () => {
  vi.spyOn(process, "uptime").mockReturnValue(12.34);

  const response = await GET();
  const body: unknown = await response.json();

  expect(response.status).toBe(200);
  expect(response.headers.get("content-type")).toMatch(/application\/json/);
  expect(body).toEqual({
    uptime: 12.34,
    version,
  });
});
