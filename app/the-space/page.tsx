import "@/app/ui/global.css";
import React from "react";
import FinancialTable from "@/app/ui/components/FinancialTable";
import FullWidthImage from "@/app/ui/components/FullWidthImage";
import TableOfContents from "@/app/ui/components/TableOfContents";
import DonateButton from "../ui/components/DonateButton";
import api from "@/app/lib/api";
import { Artist } from "../page";

const artistId = process.env.NEXT_PUBLIC_ARTIST_ID ?? 1;

export default async function TheSpacePage() {
  const { result: artist } = await api.get<Artist>(`artists/${artistId}`);

  const tableOfContentsItems = [
    { href: "#location", label: "Location" },
    { href: "#layout", label: "Space Layout & Services" },
    { href: "#vision", label: "Our Vision" },
    { href: "#details", label: "Property Details" },
    { href: "#build-out", label: "Build-Out & Investment" },
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
        The Space
      </h1>
      <p className="text-lg">
        At the heart of Patchwork is a vision for a physical space—a true
        community commons in the heart of Logan Circle. Here's what we're
        building.
      </p>

      <div id="location" className="scroll-mt-20">
        <h2 className="text-2xl font-serif font-bold mb-3">Location</h2>
        <p className="mb-4">
          Patchwork is in negotiations to acquire a space in{" "}
          <strong>1420 N Street NW</strong>, right at the center of Logan Circle
          and Dupont Circle in Washington, D.C. This is a vibrant, walkable
          neighborhood close to our community.
        </p>
        <FullWidthImage
          src="/downtown-dc.png"
          alt="1420 N Street NW on the map"
          height="500px"
        />
        <p className="mb-4">
          The space is easily accessible by public transportation and draws foot
          traffic from thousands of residents, workers, and visitors daily. It's
          the perfect location for a community hub that serves our neighborhood
          and beyond.
        </p>
      </div>

      <div id="layout" className="scroll-mt-20">
        <h2 className="text-2xl font-serif font-bold mb-3">
          Space Layout & Services
        </h2>
        <p className="mb-4">
          The 1,820 square foot lower-level office space will be thoughtfully
          designed to house multiple community programs and services:
        </p>

        <FullWidthImage
          src="/current-layout.png"
          alt="1420 N Street NW on the map"
          height="500px"
          description="Current layout of the space at 1420 N Street NW, showing the existing office areas. Not to scale."
        />

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Community Commons</h3>
            <p>
              A large, welcoming shared space for community gatherings,
              meetings, workshops, and cultural events. This is the heart of
              Patchwork.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Resident Organizations</h3>
            <p>
              Office space for community organizations and mission-driven
              partners. These organizations form the backbone of Patchwork's
              ecosystem.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Artist Studios</h3>
            <p>
              Affordable studio space for working-class and emerging artists,
              including a screen printing studio and artist collective. A space
              where creativity can flourish.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Music Practice Space</h3>
            <p>
              Local musicians need access to affordable practice studios. We're
              creating a soundproofed space where bands can rehearse and develop
              their craft.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Grocery Co-operative</h3>
            <p>
              In partnership with Greens and Beans, we'll operate an affordable
              grocery buying club bringing fresh, healthy food to the
              neighborhood at fair prices.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Tool Library</h3>
            <p>
              Community members can borrow tools instead of having to buy them.
              This reduces waste, saves money, and builds a culture of sharing
              and mutual aid.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Classes & Workshops</h3>
            <p>
              Patchwork will host skill-shares, classes, and workshops on topics
              ranging from organizing to art to practical life skills. Learning
              together strengthens community.
            </p>
          </div>
        </div>
      </div>

      <div id="vision" className="scroll-mt-20">
        <h2 className="text-2xl font-serif font-bold mb-3">Our Vision</h2>
        <p className="mb-4">
          Patchwork is more than just a building—it's a vision for what
          community can look like. It's a space that is:
        </p>
        <ul className="list-disc pl-6 space-y-3 mb-4">
          <li>
            <strong>Owned by the community, not corporations.</strong> The space
            will be managed by a multi-stakeholder board representing members,
            resident organizations, and workers, ensuring that it's accountable
            to the people it serves.
          </li>
          <li>
            <strong>Accessible to everyone.</strong> We offer sliding-scale
            pricing for memberships and services because we believe access to
            community should not depend on how much money you have. Membership
            fees can be waived for those who can't afford them.
          </li>
          <li>
            <strong>A hub for mutual aid and organizing.</strong> This space
            will be the gathering place for community organizing, political
            action, and mutual support.
          </li>
          <li>
            <strong>A celebration of culture and creativity.</strong> From art
            to music, Patchwork nurtures the creative life of the community.
          </li>
          <li>
            <strong>Rooted in the neighborhood.</strong> We're accountable to
            the people who live, work, and organize in Logan Circle and Dupont.
          </li>
        </ul>
      </div>

      <div id="details" className="scroll-mt-20">
        <h2 className="text-2xl font-serif font-bold mb-3">Property Details</h2>
        <p className="mb-4">
          Here's the specifics about the building and location:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Size:</strong> 1,820 square feet
          </li>
          <li>
            <strong>Type:</strong> Lower level office condo
          </li>
          <li>
            <strong>Location:</strong> 1400 block of N Street NW, between Logan
            Circle and Dupont Circle
          </li>
          <li>
            <strong>Accessibility:</strong> Walking distance from Metro stations
            and major bus lines
          </li>
          <li>
            <strong>Zoning:</strong> Mixed-use downtown commercial district
          </li>
        </ul>
      </div>

      <div id="build-out" className="scroll-mt-20">
        <h2 className="text-2xl font-serif font-bold mb-3">
          Build-Out & Investment
        </h2>
        <p className="mb-4">
          To turn the raw space into a vibrant community hub requires investment
          in renovation, equipment, and design. Here's the breakdown:
        </p>
        <FinancialTable
          rows={[
            { label: "Property Purchase Price", value: "$285,000" },
            { label: "Build-out & Renovation", value: "$72,000" },
            { label: "Operating Runway", value: "$54,835" },
            { label: "Total Capital Needed", value: "$411,835", isBold: true },
          ]}
        />
        <p className="mt-4">
          The build-out budget includes sound-proofing for the music practice
          space, renovation of the office areas, setup of the tool library,
          purchasing community furniture and equipment, and accessibility
          improvements.
        </p>
        <p className="mt-4">
          We're pursuing a Small Business Administration Loan, which allows us
          to put down 10% and finance the rest. This keeps us from having to
          raise all the capital upfront while still maintaining community
          control.
        </p>
        <FinancialTable
          rows={[
            { label: "Down Payment (10%)", value: "$26,500" },
            { label: "SBA Loan Amount", value: "$265,000" },
            { label: "Annual Loan Payment", value: "$18,484", isBold: true },
          ]}
        />
      </div>

      <div className="mt-8 pt-8">
        <h2 className="text-2xl font-bold text-foreground-default mb-4">
          Help Us Make This Real
        </h2>
        <p className="mb-6">
          Every dollar you donate brings us closer to opening the doors at 1420
          N Street. Whether it's $25, $50, or $500, your contribution matters.
          Together, we can create the community commons we all deserve.
        </p>
      </div>
    </div>
  );
}
