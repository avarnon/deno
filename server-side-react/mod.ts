// deno run --allow-net mod.ts
import { render } from "./masterpage.tsx";

import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();
router.get("/", ctx => {
    ctx.response.type = ".html";
    ctx.response.body = render();
});

const app = new Application();
app.use(router.routes())
    .use(router.allowedMethods())
    .use(ctx => {
        ctx.response.redirect("/");
    });

await app.listen(`127.0.0.1:${3000}`);