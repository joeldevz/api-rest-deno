//IMPORT LIBRARY
import { Application } from "https://deno.land/x/oak/mod.ts"
import RouterIndex from "./routes/index.js"
//SET HOST AND PORT
const HOST = "localhost"
const PORT = 6060

const app = new Application();
app.use(RouterIndex.routes())
app.use(RouterIndex.allowedMethods())

console.log(`Welcome API Deno :) ${HOST}:${PORT}...`);
await app.listen({ port: PORT });