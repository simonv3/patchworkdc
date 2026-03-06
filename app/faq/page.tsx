import "@/app/ui/global.css";
import React from "react";
import TableOfContents from "@/app/ui/components/TableOfContents";
import DonateButton from "../ui/components/DonateButton";
import api from "@/app/lib/api";
import { Artist, mainMenuItems } from "../page";

const artistId = process.env.NEXT_PUBLIC_ARTIST_ID ?? 1;

type FAQItem = {
  question: string;
  answer: string;
  id: string;
};

const faqItems: FAQItem[] = [
  {
    id: "what-is-patchwork",
    question: "What is Patchwork?",
    answer:
      "Patchwork is a community organization dedicated to fostering local mutual aid and solidarity economy. We are creating a community-owned commons in Logan Circle that will serve as a hub for creative political organizing, cultural activation, and working-class community support.",
  },
  {
    id: "where-located",
    question: "Where is Patchwork located?",
    answer:
      "Patchwork will be located at 1420 N Street NW in Washington, D.C., in the heart of Logan Circle. This 1,820 square foot space will house our various community programs and services.",
  },
  {
    id: "how-donation-used",
    question: "How will my donation be used?",
    answer:
      "Your donation supports our fundraising efforts to purchase and develop the property. Funds go towards the down payment, build-out costs, and operational runway. We aim to raise $285,000 for the property purchase and $72,000 for build-out.",
  },
  {
    id: "tax-deductible",
    question: "Are donations tax-deductible?",
    answer:
      'Want to make a 501c3 tax-deductible donation? Please give to our partner organization, <a href="https://www.every.org/ward-2-mutual-aid" class="text-primary-default underline hover:text-primary-dark">Ward 2 Mutual Aid</a>.',
  },
  {
    id: "what-services",
    question: "What services will Patchwork offer?",
    answer:
      "Patchwork will offer a wide range of services including classes and workshops, community meeting space, a tool library, a grocery co-operative, artist studios and shared workspace, resident organizations space, and music practice rooms.",
  },
  {
    id: "who-can-join",
    question: "Who can become a member?",
    answer:
      "Anyone in the community can become a Patchwork member! We offer sliding scale memberships so it's accessible to people of all income levels. Members get access to co-working space, events, resources, tools, and more.",
  },
  {
    id: "membership-cost",
    question: "How much does membership cost?",
    answer:
      'We offer sliding scale memberships ranging from $10/month to $120/month depending on what you can afford. These memberships provide access to our full community commons and all our services. Membership sustains us and helps us pay necessary expenses on the space. For more, check out our <a href="/business-plan" class="text-primary-default underline hover:text-primary-dark">business plan</a>.',
  },
  {
    id: "resident-organizations",
    question: "What are Resident Organizations?",
    answer:
      "Resident Organizations are community groups that co-locate and share space at Patchwork. They get dedicated office space, access to meeting rooms and event space, and the ability to cross-pollinate with other community organizations. Current partners include Ward 2 Mutual Aid, Greens and Beans Grocery Co-operative, and Kiazii.",
  },
  {
    id: "artist-studios",
    question: "Can I rent an artist studio?",
    answer:
      'Yes! Patchwork will offer affordable artist studios and shared workspace. If you\'re interested, please reach out to us at <a href="mailto:patchworkdc@proton.me" class="text-primary-default underline hover:text-primary-dark">patchworkdc@proton.me</a> for more information.',
  },
  {
    id: "practice-space",
    question: "Can bands use the practice space?",
    answer:
      "Yes, we have bands expressing interest in our affordable practice studio. If you're interested in using the space, please reach out to us for more details.",
  },
  {
    id: "grocery-coop",
    question: "Tell me about the grocery co-operative?",
    answer:
      "We're partnering with Greens and Beans Grocery Co-operative to bring affordable, community-controlled food access to Logan Circle. The co-op will be one of the primary revenue streams for Patchwork.",
  },
  {
    id: "tool-library",
    question: "What is a tool library?",
    answer:
      "A tool library allows community members to borrow tools they need instead of having to purchase them. This reduces waste and makes tools accessible to everyone, regardless of income level.",
  },
  {
    id: "how-long-timeline",
    question: "What is the timeline for opening?",
    answer:
      "We're currently in the fundraising phase. Our goal is to secure the down payment and complete build-out within the next several months. The exact timeline depends on our fundraising progress.",
  },
  {
    id: "permanent-affordability",
    question: "How will Patchwork ensure permanent affordability?",
    answer:
      "Patchwork is committed to permanent affordability through shared governance among members, transparent operations, and eventual transfer of ownership to a community land trust. We're designing our business model and governance structure to keep the space affordable and community-controlled long-term.",
  },
  {
    id: "contact",
    question: "How can I get in touch with Patchwork?",
    answer:
      'You can reach us at <a href="mailto:patchworkdc@proton.me" class="text-primary-default underline hover:text-primary-dark">patchworkdc@proton.me</a>. We\'re happy to answer questions, discuss partnership opportunities, or help you get involved in the project.',
  },
];

export default async function FAQPage() {
  const { result: artist } = await api.get<Artist>(`artists/${artistId}`);

  return (
    <div className="flex flex-col gap-6 rounded-lg pt-20 flex-1 md:mb-20">
      <TableOfContents
        items={mainMenuItems}
        title="FAQ"
        showHomeLink
        artist={artist}
      />
      <a href="/" className="text-primary-default hover:text-primary-dark">
        ← Home
      </a>
      <h1 className="text-foreground-default font-serif font-bold text-4xl md:leading-normal">
        Frequently Asked Questions
      </h1>
      <p>
        Have questions about Patchwork? We've compiled answers to our most
        commonly asked questions. If you don't find what you're looking for,
        please reach out to us at patchworkdc@proton.me.
      </p>

      <div className="flex flex-col gap-8">
        {faqItems.map((item) => (
          <div key={item.id} id={item.id} className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-foreground-default mb-3">
              {item.question}
            </h2>
            <p
              className="text-foreground-default leading-relaxed"
              dangerouslySetInnerHTML={{ __html: item.answer }}
            />
          </div>
        ))}
      </div>

      <div className="mt-8 border-t pt-8">
        <h2 className="text-2xl font-bold text-foreground-default mb-4">
          Still have questions?
        </h2>
        <p className="mb-4">
          Reach out to us directly at{" "}
          <a
            href="mailto:patchworkdc@proton.me"
            className="text-primary-default underline hover:text-primary-dark"
          >
            patchworkdc@proton.me
          </a>{" "}
          or support Patchwork by donating below.
        </p>
        <DonateButton artist={artist} />
      </div>
    </div>
  );
}
