import "@/app/ui/global.css";
import DonateFeed from "@/app/ui/components/DonateFeed";
import Thermometer from "@/app/ui/components/Thermometer";
import api from "@/app/lib/api";
import React from "react";

import DonateButton from "./ui/components/DonateButton";

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

export default async function Page() {
  const { result: artist } = await api.get<Artist>(`artists/${artistId}`);
  const sinceDate = "2026-01-22";
  const byDate = "2026-03-22";
  const initialAmountRaised = 2000000;
  const downpaymentAmount = 80000;
  const goalAmount = 300000;
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
    <main className="flex min-h-screen flex-col p-10 max-w-7xl mx-auto px-6 ">
      <img
        src={"/wordmark.png"}
        alt="Fundraiser Hero"
        className="rounded-lg w-full h-auto"
      />
      <div className="mt-4 flex grow flex-col items-start gap-4 md:flex-row relative">
        <div className="flex flex-col gap-6 rounded-lg pt-20 flex-1 md:mb-20 lg:pr-12">
          <h1 className="text-foreground-default font-serif font-bold text-4xl md:leading-normal">
            Own and control a community commons in Logan Circle
          </h1>

          <div className="md:hidden flex-col flex w-full items-stretch">
            <DonateButton artist={artist}>Support</DonateButton>
          </div>

          <p>
            Patchwork is a community organization that fosters local mutual aid
            and the solidarity economy. A project of Ward 2 Mutual Aid, it’s
            connected deeply to the organizing community in D.C.'s Ward 2.
          </p>
          <p>
            Patchwork fills a critical gap in the Logan and Dupont Circles’
            ecologies—an independent organization that is of, by, and for the
            working-class community. By stewarding a commons, Patchwork is a hub
            that fosters creativity, collaboration, and cross-pollination among
            community members and organizations committed to a more free and
            caring world.
          </p>

          <p>
            We're raising money to purchase a property in the heart of 14th
            Street and Logan Circle.
          </p>

          <p className="text-2xl font-serif font-bold">
            We have an ambitious vision for a community owned third space and
            commons, but we need your help to get there.
          </p>

          <h3 className="text-xl font-bold">For a downpayment:</h3>
          <Thermometer
            current={(initialAmountRaised + totalAmount) / 100}
            goal={downpaymentAmount}
            totalSupporters={totalSupporters}
          />
          <p>
            We're raising $80,000 to put towards a downpayment. This will secure
            a physical space for Patchwork to operate out of, and anchor our
            fundraising for the larger goal of purchasing and stewarding a
            community commons.
          </p>

          <h3 className="text-xl font-bold">To purchase the space outright:</h3>
          <Thermometer
            current={(initialAmountRaised + totalAmount) / 100}
            goal={goalAmount}
            totalSupporters={totalSupporters}
          />

          <p>
            Not taking out a bank loan will save us hundreds of thousands of
            dollars in interest payments. Help us reach our goal of raising
            $300,000 to purchase the space outright, and ensure that the commons
            is owned free and clear by the community.
          </p>

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
        <div className="sticky top-0 flex flex-col items-center rounded-lg md:pt-20 flex-0 min-w-[350px]">
          <DonateFeed artist={artist} gifts={gifts} totalGifts={totalGifts} />
        </div>
      </div>
      <div>
        <p className="text-foreground-light text-sm">
          This fundraiser is powered by{" "}
          <a
            href="https://mirlo.space"
            className="text-primary-default underline font-bold hover:text-primary-dark focus:text-primary-dark"
          >
            Mirlo
          </a>
          .
        </p>
      </div>
    </main>
  );
}
