import React from 'react';
import ReactDOMServer from 'react-dom/server.js';

//const element = React.createElement("h1", null, "Hello React!");
function Hello() {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <title>Document</title>
                <link rel="stylesheet" href="style.css" />
            </head>
            <body>
                <h1>Hello Deno</h1>
            </body>
        </html>
    );
}
const markup = ReactDOMServer.renderToString(<Hello />);
console.log(markup);
export default markup;
