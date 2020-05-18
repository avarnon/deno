// deno run --lock lockfile.json --lock-write deps.ts
import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import React from "https://dev.jspm.io/react";
import ReactDOMServer from "https://dev.jspm.io/react-dom/server";

export {
    Application,
    React,
    ReactDOMServer,
    Router
}
