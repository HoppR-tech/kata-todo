import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { validator } from "hono/validator";
import { z } from "zod";

const app = new Hono();

const newTaskSchema = z.object({
  title: z.string().min(1),
});

app
  .get("/", (c) => {
    return c.text("Bonsoir");
  })
  .post(
    "/addTask",
    validator("json", (value, c) => {
      const parsed = newTaskSchema.safeParse(value);
      if (!parsed.success) {
        return c.text("Invalid!", 422);
      }
      return parsed.data;
    }),
    (c) => {
      const { title } = c.req.valid("json");

      if (title.includes("HoppR")) {
        return c.json(
          { message: "Sniff! You are not allowed to add this task." },
          403
        );
      }

      return c.json(
        { message: `Task "${title}" added successfully!` },
        {
          status: 201,
        }
      );
    }
  );

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);

export { app };
