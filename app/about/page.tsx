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
    <main className="relative min-h-screen">
      <TableOfContents
        items={tableOfContentsItems}
        title="Contents"
        showHomeLink
      />
      <div className="flex-1 max-w-4xl mx-auto px-6 py-12 flex flex-col gap-6">
        <a href="/" className="text-primary-default hover:text-primary-dark">
          ← Home
        </a>
        <h1 className="text-foreground-default font-serif font-bold text-4xl md:leading-normal">
          About Patchwork
        </h1>
        <p>
          Patchwork is a community organization that fosters local mutual aid
          and the solidarity economy. A project of long term{" "}
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
          Member organizations largely fall into three camps: community
          resources, political organizations, and creative educational
          organizations. Our Resident Organizations, artists, and general
          members do a bit of all three. Patchwork is a hub for action,
          organizational cross-pollination, and community organizing meetings,
          and action—a critical social ecological commons in an age of rising
          fascism and reactionary violence. Patchwork’s Resident Organizations
          and cooperators have longstanding histories of organizing with
          unhoused and immigrant communities throughout Washington D.C. and are
          determined to make the space available to those communities through
          tiered dues, community events, and skill shares.
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
          neighborhoods, there is a huge income gap: around 20% make under
          $50,000 a year, and a significant portion live under the poverty
          level. Too many in Washington D.C. don’t have access to the kinds of
          facilities, resources, and networks needed to express themselves and
          their community. Patchwork creates a space and community for these
          members.
        </p>
        <p>
          Local community members will be within walking and biking distance of
          a beautiful community center at pay-what-you-can prices for membership
          where they can meet their neighbors and be a part of a thriving
          independent community hub and third space. They can access community
          resources like affordable groceries, community meals, events, and a
          tool library, in a space they can simultaneously use to collaborate,
          create, and get inspired.
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
          community members and long-term decommodification of the space and
          land. Cooperators practice these commitments through the facilitation
          of shared governance among members, transparent operations, and
          eventual transfer of ownership to a community land trust (if this is
          possible).
        </p>
        <DonateButton artist={artist} />
        <h2 className="text-3xl font-serif font-bold">Business Plan</h2>
        <p>
          Patchwork’s primary revenue streams are from member dues, Resident
          Organizations’ rent, artist studio rent, band practice space, and the
          grocery co-op.
        </p>
        <p>
          Secondary revenue streams include grants / sponsorships, events &amp;
          programs, non-member space rental, also in order of projected revenue.
        </p>
        <FinancialTable
          rows={[
            { label: "Total Revenue Goal", value: "$12,233/mo (on average)" },
            { label: "Total Projected Expenses", value: "$10,483" },
            { label: "Monthly Net", value: "$1,751", isBold: true },
          ]}
        />
        <p>
          For a further breakdown, 1420 N Street{" "}
          <a href="patchworkdc@proton.me">reach out to us.</a>
        </p>
        <h2 className="text-2xl font-serif font-bold">1420 N Street</h2>
        <p>
          1420 N Street is a 1,820 SF Lower Level Office Condo on the 1400 block
          of N St NW
        </p>
        <FullWidthImage
          src="/downtown-dc.png"
          alt="1420 N Street NW on the map"
          height="500px"
        />
        <FinancialTable
          rows={[
            { label: "Total Purchase Price", value: "$285,000" },
            { label: "Build out", value: "$72,000" },
            { label: "Runway", value: "$54,835" },
            { label: "Total Capital Needed", value: "$427,835", isBold: true },
          ]}
        />
        <p>
          We are talking to a lender about a Small Business Administration Loan,
          which allows us to put down 10%, making our downpayment $26,500. We
          will be using the next two months to be raising capital to decrease
          the loan and annual payment.
        </p>
        <FinancialTable
          rows={[
            {
              label: "10% Downpayment for a SBA Loan",
              value: "$26,500",
            },
            { label: "Loan amount", value: "$265,000" },
            { label: "Annual loan payment", value: "$18,484", isBold: true },
          ]}
        />
        <p>
          These are the numbers assumed in our budget spreadsheet. Of course,
          the more we raise for the downpayment, the better off we will be. The
          main thing to flag about this property is the high condo fee and the
          special assessment that was implemented to raise capital reserves for
          future sustainability of the property. Financial assessment of capital
          reserves of the property available upon request.
        </p>
        <DonateButton artist={artist} />
        <h2 className="text-2xl font-serif font-bold">
          Major Revenue Stream Goals and Justifications
        </h2>
        <h3 className="text-xl font-bold">Member Dues</h3>
        <p>
          Member dues most closely align our mission with where the revenue
          comes from, it also has the most capacity for revenue growth, as it
          doesn’t face the square-footage limitations that most other revenue
          streams do.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Goal:</strong> $3,000/mo in total member dues (54 members)
          </li>
          <li>
            <strong>Assumptions:</strong> We project that we can achieve 54
            dues-paying members by month 14 of Patchwork. 24% at a $10/mo rate,
            25% at a $25/mo rate, 22% at a $60/mo rate, and 27% at a $120/mo
            rate.
          </li>
        </ul>
        <p>Justification:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Cooperator Networks:</strong> The cooperators of Patchwork
            have extensive organizing experience and have organized educational
            summer camps, were on the board of the DC Tool Library, helped
            started the Greens and Beans grocery co-operative, and have run
            numerous successful membership and fundraising drives for Ward 2
            Mutual Aid and have extensive relationships across D.C.’s organizing
            scene.
          </li>
          <li>
            <strong>Resident Organization Networks:</strong> Patchwork is
            partnering with organizations like the{" "}
            <a href="https://www.instagram.com/ward2mutualaid/">
              Ward 2 Mutual Aid
            </a>
            , the{" "}
            <a href="https://greensandbeansgrocery.com/">
              Greens and Beans Grocery Co-operative
            </a>
            , and <a href="https://www.instagram.com/kiazii_publix/">Kiazii</a>.
            We are looking for others to become Resident Organizations who have
            their own membership bases as lead-generation for Patchwork’s
            memberships.
          </li>
          <li>
            <strong>Sliding Scale and Valuable:</strong> Member benefits such as
            discounted event access, screen printer access, tool library access,
            commons access and resources, community meeting space, and more will
            essentially pay for themselves by a community member purchasing a
            membership.
          </li>
          <li>
            <strong>Conservative Estimates:</strong> The specific breakdown of
            membership rates is untested and the total number of 300 are both
            goals that we think are conservative compared to the potential of
            the space.
          </li>
        </ul>
        <h3 className="text-xl font-bold">Resident Organization Rent</h3>
        <p>
          Resident Organizations help make the whole project possible. By coming
          together with Patchwork and the other Resident Organizations, we make
          possible something no one organization could achieve on its own.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Goal:</strong> $2,400/mo in total Resident Organization rent
            (2 organizations)
          </li>
          <li>
            <strong>Assumptions:</strong> Our market research has shown us that
            a going rate in D.C. for small offices in co-working spaces is
            roughly $30/square foot, which for an 80 square foot office,
            translates to $2400/mo. Patchwork plans to charge a rate of $1200/mo
            total for an 250 square foot office which includes all the many
            benefits of a managed coworking space for a niche type of
            organization as listed below. Which is a much lower rate than sq
            foot.
          </li>
        </ul>
        <p>Justification:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Substantial Benefits:</strong> Member organizations get a
            medium-sized office, co-locate with other organizing focused
            organizations, access meeting rooms, large event space, get 24/7
            access, risograph printing and other creative design support,
            commons access, cultural activation and programming by Patchwork,
            and have built-in cross-pollination and member-recruitment funnels
            for their own organizations by being a part of Patchwork. All of
            these are substantial differentiators from co-working spaces like
            WeWork for the right organization.
          </li>
          <li>
            Co-operators of Patchwork are actively working on developing a
            grocery co-operative and a band practice space. They already have a
            committed customer base and are limited by the current space
            available.
          </li>
          <li>
            We have interest from at least two small not for profits / unions in
            office space.
          </li>
        </ul>
        <h3 className="text-xl font-bold">Artist Studio Rent</h3>
        <p>
          D.C. lacks affordable artist studios for young, poor, working-class,
          and emerging artists. Patchwork helps fill this gap.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Goal:</strong> $1,000/mo in total artist studio rent (1
            artist studio)
          </li>
          <li>
            <strong>Assumptions:</strong> Going rates for artist studios in D.C.
            are significantly higher than our planned $1000/mo. Equivalent
            spaces like the O Street Studios are much smaller for the same price
            point. This allows us to cater to select working-class artists and
            provide them with the space and resources to do their work.
          </li>
        </ul>
        <p>Justification:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            We have a screen printing studio and an artist collective willing to
            commit to moving into the space.
          </li>
        </ul>
        <h3 className="text-xl font-bold">Music Practice Space</h3>
        <p>
          The choice of practice space for local—especially working class—
          musicians is very limited. In D.C. proper the only practice studio is
          7DrumCity, located a mile from Patchwork.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Goal:</strong> $1,200/mo in total income from practice space
            rental.
          </li>
          <li>
            <strong>Assumptions:</strong> Going rates for practice spaces in
            D.C. are around $38/hour. Our $30/hour is competitive with this and
            allows us to cater to local musicians and provide them with the
            space and resources to do practice their art. To respect our
            neighbors, we aim to only offer practice times during the afternoon
            and early evening.
          </li>
          <li>
            <strong>Risks:</strong> if it’s not possible to turn one of the
            smaller offices into a music practice space because of limitations
            in sound proofing (for which we have budgeted $30,000), we will
            lease the space to another Resident Organization.
          </li>
        </ul>
        <p>Justification:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            We have a number of bands who have expressed interest in using a
            local affordable practice studio.
          </li>
        </ul>
        <FullWidthImage
          src="/patches-2.png"
          imageClassName="rotate-180"
          alt="A graphic of patched cloth"
        />
        <h2 className="text-2xl font-serif font-bold">Risks</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            The building’s condo fee is high because of a reserve study that
            deemed their reserve funds to be relatively low for where they need
            to be. The building seems to be taking corrective action, but we
            need more information. Condo fees don’t tend to go down either, but
            our budgeted expenses and revenue streams account for a buffer here.
          </li>
          <li>
            Managing seven different service lines (studio, practice space,
            co-op, tool library, etc.) from Day 1 is a lot of work. However, our
            worker members have a lot of experience through their organizing
            with space management and co-ordinating across several groups.
          </li>
          <li>
            Music practice space in a condo building is a potential conflict.
            Even with limited hours, soundproofing will be expensive and may
            never be sufficient. Likewise, providing up to a hundred community
            and grocery members access to the space could cause potential
            conflict with the building management. We hope to alleviate this by
            doing outreach to the building residents and inviting them to become
            active participants in the space.
          </li>
          <li>
            Raising $411k, in a combination of donations, loans, and other
            funding sources, for a startup is a large task. The 10% down payment
            and commercial loan are expensive. The more we can chip away at this
            from community funding, loans, and donations, the better.
          </li>
        </ul>
        <DonateButton artist={artist} />
      </div>
    </main>
  );
}
