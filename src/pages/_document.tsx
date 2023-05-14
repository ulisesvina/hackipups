import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>
          hackipups!
        </title>
        <meta name="description" content="A virtual pet game" />
        <meta lang='en' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/rover-fixed.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
