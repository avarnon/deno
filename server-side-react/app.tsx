import { React } from "./deps.ts";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      p: any;
      script: any;
    }
    type Element = any;
  }
}

export class App extends React.Component<{}, void> {
  constructor(props: {}) {
    super(props);
  }

  render(): JSX.Element {
    const script: string = `
    function tick() {
        var el = window.document.getElementById('app');
        el.getElementsByTagName("p")[0].innerHTML = "The current time is " + (new Date()).toLocaleTimeString();
    }
    setInterval(tick, 1000);
    `;

    return (
      <>
        <p>The current time is {(new Date()).toLocaleTimeString()}</p>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{ __html: script }}
        ></script>
      </>
    );
  }
}
