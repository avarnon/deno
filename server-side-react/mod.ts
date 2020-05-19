// deno run --allow-net --lock lockfile.json mod.ts
import { render } from "./masterpage.tsx";
import { Application, Router } from "./deps.ts";

const controller = new AbortController();
const { signal } = controller;

const router = new Router();
router.get("/", ctx => {
    ctx.response.type = ".html";
    ctx.response.body = render();
});
router.get("/time", ctx => {
    ctx.response.body = { time: new Date() };
})
router.get("/exit", ctx => {
    controller.abort();
});

const app = new Application();

app.addEventListener("error", (evt) => {
  console.error(evt.error);
});

app.use(router.routes())
    .use(router.allowedMethods())
    .use(ctx => {
        ctx.response.redirect("/");
    });

const listenPromise: Promise<void> = app.listen({ port: 3000, signal });

await listenPromise;