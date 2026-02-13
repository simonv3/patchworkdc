export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Patchwork: Own and control a community commons</title>
        <meta
          property="og:title"
          content="Patchwork: Own and control a community commons"
        />
        <meta
          property="og:description"
          content="A fundraiser to own and control a community commons in Logan Circle"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta
          property="og:site_name"
          content="Patchwork: Own and control a community commons"
        ></meta>
        <meta property="og:image" content="/hero-image.png"></meta>
        <meta property="og:image:width" content="800"></meta>
        <meta property="og:image:height" content="400"></meta>
        <meta
          property="og:image:alt"
          content="Mirlo musicians playing music in front of a locomotive."
        ></meta>
      </head>
      <body>{children}</body>
    </html>
  );
}
