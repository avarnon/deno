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
      var xhr = new XMLHttpRequest();
      
      xhr.responseType = 'json';
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          var time = new Date(xhr.response.time);
          var appEl = window.document.getElementById('app');

          appEl.getElementsByTagName("p")[0].innerHTML = "The current time is " + time.toLocaleTimeString();
        }
      };
      xhr.open('GET', '/time');
      xhr.send();
    }
    setInterval(tick, 1000);
    `;
    

    return (
      <>
        <p>The current time is {(new Date()).toLocaleTimeString()}</p>
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: script }}></script>
      </>
    );
  }
}
