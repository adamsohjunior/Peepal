import { serve } from "@hono/node-server";
import { app } from './app'

// Start the server
const port = Number(process.env.PORT) || 3000;
console.log(`Server is running on port ${port}`);
serve({ fetch: app.fetch, port, hostname: "0.0.0.0" });
