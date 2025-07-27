import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="color-scheme" content="light dark" />
      </Head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var tema = localStorage.getItem('tema');
                  var html = document.documentElement;
                  if (tema === 'escuro') {
                    html.classList.add('dark');
                    html.style.backgroundColor = '#111827';
                  } else {
                    html.style.backgroundColor = '#f9fafb';
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}