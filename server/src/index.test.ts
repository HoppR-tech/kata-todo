import { app } from "./index.js";

import { describe, expect, it } from "vitest";

describe("App", () => {
  it("returns a greeting response", async () => {
    const response = await app.request("/");
    const result = await response.text();
    expect(result).toBe("Bonsoir");
  });

  it("accepts to add a valid new task", async () => {
    const response = await app.request("/addTask", {
      method: "POST",
      body: JSON.stringify({ title: "Test Task" }),
      headers: { "Content-Type": "application/json" },
    });

    const result = await response.json();

    expect(result.message).toContain("Test Task");
  });

  it("refuses to add an invalid new task", async () => {
    const { status } = await app.request("/addTask", {
      method: "POST",
      body: JSON.stringify({ name: "Test Task" }),
      headers: { "Content-Type": "application/json" },
    });

    expect(status).toBe(422);
  });

  it("refuses to add a forbidden new task", async () => {
    const { status } = await app.request("/addTask", {
      method: "POST",
      body: JSON.stringify({ title: "HoppR" }),
      headers: { "Content-Type": "application/json" },
    });

    expect(status).toBe(403);
  });
});
