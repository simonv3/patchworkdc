import "@/app/ui/global.css";
import Thermometer from "@/app/ui/components/Thermometer";
import FinancialTable from "@/app/ui/components/FinancialTable";
import TableOfContents from "@/app/ui/components/TableOfContents";
import Ticker from "@/app/ui/components/Ticker";
import api from "@/app/lib/api";

export type Artist = {
  id: number;
  defaultPlatformFee?: number;
  properties: {
    colors: { primary: string } | null;
    fundraising?: {
      title: string;
      description: string;
      imageUrl?: string;
      sinceDate?: string;
      goalAmount?: number;
    };
  };
  user: {
    currency: string;
  };
};

export type Gift = {
  name: string;
  amount: number;
  message?: string;
  datePurchased: string;
};

const artistId = process.env.NEXT_PUBLIC_ARTIST_ID ?? 1;
const goal = Number(process.env.NEXT_PUBLIC_GOAL ?? 3000);
const campaignStartDate = "2025-07-01";

export const mainMenuItems = [
  { href: "/about", label: "About us" },
  // { href: "/the-space", label: "The space" },
  // { href: "/business-plan", label: "Business plan" },
  { href: "/getting-involved", label: "Getting involved" },
  { href: "/faq", label: "FAQ" },
];

export default async function Page() {
  const { result: artist } = await api.get<Artist>(`artists/${artistId}`);
  const sinceDate = "2026-01-22";
  const byDate = "2026-03-22";
  const initialAmountRaised = 450000;
  const downpaymentAmount = 61500;
  const goalAmount = 285000;
  const monthlyGoal = 2000;
  const monthlySupport = 0;

  const {
    results: gifts,
    total: totalGifts,
    totalAmount,
    totalSupporters,
  } = (await api.getMany<Gift>(
    `artists/${artistId}/supporters?sinceDate=${sinceDate}`,
  )) as {
    results: Gift[];
    total: number;
    totalAmount: number;
    totalSupporters: number;
  };

  return (
    <div className="flex flex-col gap-6 rounded-lg md:pt-20 flex-1 md:mb-20">
      <TableOfContents
        items={mainMenuItems}
        title="Navigation"
        artist={artist}
      />
      <img
        src={"/wordmark.png"}
        alt="Patchwork"
        className="rounded-lg w-full h-auto"
      />
      <Ticker
        messages={[
          "Help us own and control a community commons in Logan Circle",
          "Swing by for a coffee, listen in on the neighborhood meeting",
          "Come to the movie screening, join in a screen printing session",
          "Build a puppet for the march, chat with someone tinkering in the makerspace",
        ]}
        intervalMs={4000}
        className="text-foreground-default font-serif font-bold text-3xl md:text-4xl md:leading-normal min-h-[150px] md:min-h-[110px]"
      />

      <p>
        Patchwork is a community organization that fosters local mutual aid and
        the solidarity economy. After years of organizing in the neighborhood,
        months of figuring out the details on a property purchase, we are moving
        to make this space a reality.
      </p>

      {/* <p>
        We're raising money to purchase a 1,800 sq. ft. space in the heart of
        14th Street and Logan Circle. To do that,{" "}
        <mark>we need to raise $20,000 by March 22, 2026</mark>.
      </p>

      <h3 className="text-xl font-bold">How we're doing:</h3>
      <Thermometer
        current={(initialAmountRaised + totalAmount) / 100}
        goal={downpaymentAmount}
        totalSupporters={totalSupporters}
      />
      <p>
        This will secure a physical space for us to operate out of and anchor
        our fundraising for the larger goal of purchasing and stewarding a
        community commons.
      </p>

      <p>Here's the math:</p>

      <FinancialTable
        rows={[
          { label: "Earnest money", value: "$20,000" },
          { label: "Downpayment", value: "$26,500" },
          { label: "Closing costs", value: "$15,500" },
          { label: "Total at closing", value: "$61,500", isBold: true },
          { label: "Total purchase price", value: "$285,000", isBold: true },
        ]}
      /> */}
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSf6ZWnushXRfYGs3BweUZAFvLTZ9n3SehIRqrvOKvQmZSUehg/viewform?embedded=true"
        height="2600"
      >
        Loading…
      </iframe>

      <p>
        Want to know more details?{" "}
        {/* <a href="/business-plan">Read our full business plan</a>,  */}
        Check out our <a href="/faq">FAQ</a>, or{" "}
        <a href="/getting-involved">get involved</a>.
      </p>

      {/* <p>
        Not taking out a bank loan will save us hundreds of thousands of dollars
        in interest payments. Help us reach our goal of raising $300,000 to
        purchase the space outright, and ensure that the commons is owned free
        and clear by the community.
      </p>

      <h3 className="text-xl font-bold">To purchase the space outright:</h3>
      <Thermometer
        current={(initialAmountRaised + totalAmount) / 100}
        goal={goalAmount}
        totalSupporters={totalSupporters}
      /> */}

      {/* <h3 className="text-xl font-bold">
            Become a founding community member:
          </h3>
          <Thermometer
            current={monthlySupport / 100}
            goal={monthlyGoal}
            totalSupporters={totalSupporters}
          />
          <p>
            Patchwork will be controlled and stewarded by the community.
            Community members will have access to co-working space, events,
            resources, tools, printers, and more. Become a member and help us
            reach monthly sustainability.
          </p> */}
    </div>
  );
}
