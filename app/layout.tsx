import "@/app/ui/global.css";
import DonateFeed from "@/app/ui/components/DonateFeed";
import DesktopNav from "@/app/ui/components/DesktopNav";
import api from "@/app/lib/api";
import { Artist, Gift } from "@/app/page";

const artistId = process.env.NEXT_PUBLIC_ARTIST_ID ?? 1;
const sinceDate = "2026-01-22";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { result: artist } = await api.get<Artist>(`artists/${artistId}`);

  const { results: gifts, total: totalGifts } = (await api.getMany<Gift>(
    `artists/${artistId}/supporters?sinceDate=${sinceDate}`,
  )) as {
    results: Gift[];
    total: number;
  };

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
        <meta property="og:image" content="/preview-image.png"></meta>
        <meta property="og:image:width" content="1200"></meta>
        <meta property="og:image:height" content="600"></meta>
        <meta
          property="og:image:alt"
          content="Patchwork: Own and control a community commons"
        ></meta>
      </head>
      <body>
        <DesktopNav
          items={[
            { href: "/about", label: "About us" },
            { href: "/the-space", label: "The space" },
            { href: "/business-plan", label: "Business plan" },
            { href: "/getting-involved", label: "Getting involved" },
            { href: "/faq", label: "FAQ" },
          ]}
        />
        <div className="flex min-h-screen flex-col pt-20 px-6 py-10 max-w-7xl mx-auto">
          <div className="mt-4 flex grow flex-col items-start gap-4 md:flex-row relative">
            <div className="flex-1 md:mb-20 lg:pr-12">{children}</div>
            <div className="sticky top-20 flex flex-col items-center rounded-lg md:pt-20 flex-0 w-full md:max-w-[350px]">
              <DonateFeed
                artist={artist}
                gifts={gifts}
                totalGifts={totalGifts}
              />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
