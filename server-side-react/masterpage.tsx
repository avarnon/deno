import { React, ReactDOMServer } from "./deps.ts";
import { App } from './app.tsx';

export function render(): string {
    let body = ReactDOMServer.renderToString(<App/>);

  return `<!DOCTYPE html>
<html>
<head>
  <title>Deno Server-side ReactJS</title>
  <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
</head>
<body>
  <h1>Deno Server-side ReactJS</h1>
  <hr />
  <div id=app>${body}</div>
</body>
</html>`;
}
