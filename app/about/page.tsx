import "@/app/ui/global.css";
import React from "react";
import FinancialTable from "@/app/ui/components/FinancialTable";
import FullWidthImage from "@/app/ui/components/FullWidthImage";
import TableOfContents from "@/app/ui/components/TableOfContents";
import DonateButton from "../ui/components/DonateButton";
import api from "@/app/lib/api";
import { Artist } from "../page";

const artistId = process.env.NEXT_PUBLIC_ARTIST_ID ?? 1;

export default async function AboutPage() {
  const { result: artist } = await api.get<Artist>(`artists/${artistId}`);
  const tableOfContentsItems = [
    { href: "#patchwork-looks-like", label: "Patchwork looks like" },
    {
      href: "#creative-political-organizing",
      label: "For creative political organizing",
    },
    {
      href: "#working-class-community",
      label: "For working-class community members",
    },
    { href: "#patchwork-long-term", label: "Patchwork is long-term" },
    { href: "#business-plan", label: "Business Plan" },
    { href: "#1420-n-street", label: "1420 N Street" },
    {
      href: "#revenue-stream-goals",
      label: "Major Revenue Stream Goals and Justifications",
    },
    { href: "#risks", label: "Risks" },
  ];

  return (
    <div className="flex flex-col gap-6 rounded-lg pt-20 flex-1 md:mb-20">
      <TableOfContents
        items={tableOfContentsItems}
        title="Contents"
        showHomeLink
        artist={artist}
      />
      <a href="/" className="text-primary-default hover:text-primary-dark">
        ← Home
      </a>
      <h1 className="text-foreground-default font-serif font-bold text-4xl md:leading-normal">
        About Patchwork
      </h1>
      <p>
        Patchwork is a community organization that fosters local mutual aid and
        the solidarity economy. A project of long term{" "}
        <a
          href="https://www.every.org/ward-2-mutual-aid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ward 2 Mutual Aid
        </a>{" "}
        organizers, it’s connected deeply to the organizing community in D.C.
      </p>
      <h2 className="text-2xl font-serif font-bold" id="patchwork-looks-like">
        Patchwork looks like:
      </h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Classes, Workshops, &amp; Skill-shares</li>
        <li>Community Meeting Space</li>
        <li>Tool Library</li>
        <li>Grocery Co-operative / Buying Club</li>
        <li>Artist Studios &amp; Shared Workspace</li>
        <li>Resident Organizations</li>
        <li>Music practice space</li>
      </ul>
      <h2
        className="text-2xl font-serif font-bold"
        id="creative-political-organizing"
      >
        Patchwork is for creative political organizing
      </h2>
      <p>
        Member organizations largely fall into three camps: community resources,
        political organizations, and creative educational organizations. Our
        Resident Organizations, artists, and general members do a bit of all
        three. Patchwork is a hub for action, organizational cross-pollination,
        and community organizing meetings, and action—a critical social
        ecological commons in an age of rising fascism and reactionary violence.
        Patchwork’s Resident Organizations and cooperators have longstanding
        histories of organizing with unhoused and immigrant communities
        throughout Washington D.C. and are determined to make the space
        available to those communities through tiered dues, community events,
        and skill shares.
      </p>
      <FullWidthImage src="/patches-1.png" alt="A graphic of patched cloth" />
      <h2
        className="text-2xl font-serif font-bold"
        id="working-class-community"
      >
        Patchwork is for working-class community members
      </h2>
      <p className="italic">
        While Dupont and Logan Circle are often considered “well resourced”
        neighborhoods, there is a huge income gap: around 20% make under $50,000
        a year, and a significant portion live under the poverty level. Too many
        in Washington D.C. don’t have access to the kinds of facilities,
        resources, and networks needed to express themselves and their
        community. Patchwork creates a space and community for these members.
      </p>
      <p>
        Local community members will be within walking and biking distance of a
        beautiful community center at pay-what-you-can prices for membership
        where they can meet their neighbors and be a part of a thriving
        independent community hub and third space. They can access community
        resources like affordable groceries, community meals, events, and a tool
        library, in a space they can simultaneously use to collaborate, create,
        and get inspired.
      </p>
      <p>
        Patchwork cooperators have years of organizing, not-for-profit, and
        business development experience to support the local community in
        establishing new and creative projects. What’s more, members can meet
        other community members like them, join committees, get involved in
        local organizing, and utilize Patchwork’s Tool Library and other
        community resources.
      </p>
      <h2 className="text-2xl font-serif font-bold" id="patchwork-long-term">
        Patchwork is long-term
      </h2>
      <p>
        Patchwork is committed to permanent affordability for working-class
        community members and long-term decommodification of the space and land.
        Cooperators practice these commitments through the facilitation of
        shared governance among members, transparent operations, and eventual
        transfer of ownership to a community land trust (if this is possible).
      </p>
    </div>
  );
}
