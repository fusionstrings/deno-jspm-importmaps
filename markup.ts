import React from 'react';
import ReactDOMServer from 'react-dom/server.js';

const element = React.createElement("h1", null, "Hello React!");
const markup = ReactDOMServer.renderToString(element);

export default markup;
