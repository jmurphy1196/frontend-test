import Image from "next/image";
import { Inter } from "next/font/google";
import { Hero } from "@/components/Hero";
import { createContentfulClient } from "@/lib/contentful";
import { Section } from "@/components/Section";
import { useRef } from "react";
import { Banner } from "@/components/Banner";
import { ReviewsSection } from "@/components/ReviewSection";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ orderedContent }) {
  const sectionRef = useRef(null);

  return (
    <main>
      {orderedContent.map((contentItem, idx) => {
        switch (contentItem.sys.contentType.sys.id) {
          case "hero":
            return (
              <Hero
                content={contentItem.fields}
                sectionRef={sectionRef}
                key={contentItem.sys.id}
              />
            );
          case "infoSection":
            return (
              <Section
                content={contentItem.fields}
                refer={idx === 1 ? sectionRef : null}
                key={contentItem.sys.id}
              />
            );
          case "banner":
            return (
              <Banner
                content={contentItem.fields}
                refer={idx === 1 ? sectionRef : null}
                key={contentItem.sys.id}
              />
            );
          case "reviewSection":
            return (
              <ReviewsSection
                content={contentItem.fields}
                key={contentItem.sys.id}
              />
            );
          case "footer":
            return (
              <Footer content={contentItem.fields} key={contentItem.sys.id} />
            );
          default:
            return null;
        }
      })}
    </main>
  );
}

export async function getStaticProps() {
  const client = await createContentfulClient();
  const orderedContent = [];

  const pageOrder = await client.getEntries({
    content_type: "pageOrder",
  });

  for (const item of pageOrder.items[0].fields.content) {
    const entry = await client.getEntry(item.sys.id);
    orderedContent.push(entry);
  }

  return {
    props: {
      orderedContent,
    },
  };
}
