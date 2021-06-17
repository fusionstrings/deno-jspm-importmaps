import('./dy.js').then(m => {
    console.log(m);
});

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

export default Hello;