import "@/app/ui/global.css";
import React from "react";
import TableOfContents from "@/app/ui/components/TableOfContents";
import EmailForm from "@/app/ui/components/EmailForm";
import DonateButton from "../ui/components/DonateButton";
import api from "@/app/lib/api";
import { Artist } from "../page";

const artistId = process.env.NEXT_PUBLIC_ARTIST_ID ?? 1;

export default async function GettingInvolvedPage() {
  const { result: artist } = await api.get<Artist>(`artists/${artistId}`);

  const tableOfContentsItems = [
    { href: "#volunteer", label: "Volunteer" },
    { href: "#become-member", label: "Become a Member" },
    { href: "#resident-organizations", label: "Resident Organizations" },
    { href: "#donate", label: "Donate" },
    { href: "#stay-updated", label: "Stay Updated" },
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
        Getting Involved
      </h1>
      <p className="text-lg">
        Patchwork is built by and for community members. There are many ways to
        get involved and help make our vision a reality. Whether you want to
        volunteer, become a member, partner with us as a Resident Organization,
        or support us financially, we'd love to have you join us.
      </p>

      <div id="volunteer" className="scroll-mt-20">
        <h2 className="text-2xl font-serif font-bold mb-3">Volunteer</h2>
        <p className="mb-4">
          We need passionate community members to help bring Patchwork to life.
          Whether you have skills in organizing, construction, design,
          marketing, or anything else, your contributions matter. Volunteers can
          help with:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Fundraising campaigns and events</li>
          <li>Community outreach and organizing</li>
          <li>Building renovations and design</li>
          <li>Technology and digital communications</li>
          <li>Grant writing and business planning</li>
          <li>Member recruitment and retention</li>
        </ul>
        <p>
          Interested in volunteering? Fill out the form below and let us know
          how you'd like to help.
        </p>
      </div>

      <div id="become-member" className="scroll-mt-20">
        <h2 className="text-2xl font-serif font-bold mb-3">Become a Member</h2>
        <p className="mb-4">
          Become part of the Patchwork community and support our mission while
          accessing our growing network of resources and spaces. Members enjoy:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Access to our community commons and shared spaces</li>
          <li>Tool library and equipment access</li>
          <li>Discounted event tickets and programs</li>
          <li>Community meetings and organizing opportunities</li>
          <li>Member benefits from partner organizations</li>
          <li>A say in how Patchwork is run</li>
        </ul>
        <p className="mb-4">
          We offer sliding scale memberships to ensure everyone can participate:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>$10/month - Community supporter</li>
          <li>$25/month - Active participant</li>
          <li>$60/month - Invested member</li>
          <li>$120+/month - Sustaining member</li>
        </ul>
      </div>

      <div id="resident-organizations" className="scroll-mt-20">
        <h2 className="text-2xl font-serif font-bold mb-3">
          Resident Organizations
        </h2>
        <p className="mb-4">
          Are you an organization working on community-focused mission?
          Patchwork is seeking Resident Organizations to partner with us. We
          offer:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Affordable office space in a vibrant community hub</li>
          <li>Access to meeting rooms and shared facilities</li>
          <li>Cross-pollination with other community organizations</li>
          <li>Shared equipment and resources</li>
          <li>Built-in member recruitment funnels</li>
          <li>Cultural programming and community activation</li>
        </ul>
        <p>
          Current Resident Organizations include Ward 2 Mutual Aid, Greens and
          Beans Grocery Co-operative, and Kiazii. If you're interested in
          becoming a Resident Organization, please reach out to us.
        </p>
      </div>

      <div id="donate" className="scroll-mt-20">
        <h2 className="text-2xl font-serif font-bold mb-3">Donate</h2>
        <p className="mb-4">
          Financial contributions are crucial to making Patchwork a reality. We
          are raising funds for:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Down payment:</strong> $26,500 to secure the property.
          </li>
          <li>
            <strong>Build-out:</strong> $72,000 to create our community spaces.
          </li>
          <li>
            <strong>Long-term:</strong> $285,000 to purchase the space outright
            and avoid bank debt.
          </li>
        </ul>
        <p className="mb-6">
          Every donation brings us closer to creating a truly community-owned
          commons. Tax-deductible donations can be made through our partner
          organization, Ward 2 Mutual Aid.
        </p>
        <DonateButton artist={artist} />
      </div>

      <div id="stay-updated" className="scroll-mt-20">
        <h2 className="text-2xl font-serif font-bold mb-3">Stay Updated</h2>
        <p className="mb-4">
          Want to stay in the loop about Patchwork's progress, upcoming events,
          and ways to get involved? Sign up below to receive updates from us.
        </p>
        <EmailForm
          endpoint="/api/follow"
          buttonText="Sign Me Up"
          emailPlaceholder="your@email.com"
          textareaPlaceholder="Tell us how you'd like to get involved..."
          successMessage="Thanks for signing up! We'll keep you updated on Patchwork's progress."
        />
      </div>

      <div className="mt-8 border-t pt-8">
        <h2 className="text-2xl font-bold text-foreground-default mb-4">
          Still have questions?
        </h2>
        <p>
          Reach out to us directly at{" "}
          <a
            href="mailto:patchworkdc@proton.me"
            className="text-primary-default underline hover:text-primary-dark"
          >
            patchworkdc@proton.me
          </a>
          . We'd love to hear from you!
        </p>
      </div>
    </div>
  );
}
