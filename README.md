# Todo (kata)

## Features

The goal is to design an application that allows adding tasks and completing them (_amazingly innovative!_). The application enables all users to assign a task to themselves and certain users to assign a task to another user. The application also allows assigning a start and end date to a task. A task can also have a description and a priority. Tasks have to be added to a sprint to be started. The application allows certain users to create sprints and assign tasks to them.

The application can be developed using backend (Hono) either/or frontend technologies (Next.js).

## Getting Started

Have an LTS version of Node.js installed.

Clone the repository

```bash
npm i
npm run dev
```

## Stack

- TypeScript
- Node.js
- [Hono](https://hono.dev/)
- [Next.js](https://nextjs.org/docs) in app directory
- Vitest for tests
- zod via `@hono/zod-validator` for validation

## Calling endpoints

```bash
curl -X POST -d '{"title":"Become healthy, rich and beautiful in one day"}' -H 'Content-Type: application/json' http://localhost:3000/addTask
```

or using [Bruno](https://www.usebruno.com/downloads) or [Postman](https://www.postman.com/downloads/).