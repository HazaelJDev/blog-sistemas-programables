/**
 * Este documento sobreescribe el documento default de next.js
 * En este caso agregaremos el idioma en Español para mejorar el SEO
 */
import Document, { Html, Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}