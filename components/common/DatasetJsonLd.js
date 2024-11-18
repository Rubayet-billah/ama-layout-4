import React from "react";
import Script from "next/script";
import { pubCode } from "@/constants/constants";

const DatasetJsonLd = ({
  id = "",
  name = "",
  datePublished = new Date().toISOString(),
  dateModified = new Date().toISOString(),
  description = "",
  url = "",
  breadcrumb,
  FAQS,
  price,
  images = [],
  region,
  marketSize = "XX",
  keywords = "Global Market Research , Latest industry analysis , in-Depth Market Study , customized market research study, Syndicate Market Research , market research analyst , market survey report , Company profile industry report , Market outlook report",
}) => (
  <>
    {/* BreadcrumbList */}
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumb,
        }),
      }}
    />

    {/* FAQ  */}

    <Script
      id="faq-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS,
        }),
      }}
    />

    {/* Dataset schema  */}
    <Script
      id="dataset-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Dataset",
          name: name,
          description: description,
          url: url,
          image: images.find((img) => img.type === "banner")?.url,
          keywords: keywords,
          creator: {
            "@type": "Organization",
            name: "AMA Research & Media LLP", //
          },
          logo: {
            "@type": "ImageObject",
            url: `${process.env.BASE_URL}/logo4.jpeg`, // need to have this.
          },
          temporalCoverage: `${new Date().getFullYear()}-${
            new Date().getFullYear() + 8
          }`,
          spatialCoverage: region,
          license: `${process.env.BASE_URL}/privacy-policy`,
          datePublished: datePublished, // update this dynamic
          dateModified: dateModified, // update this dynamic
          sameAs: url,
          includedInDataCatalog: {
            type: "DataCatalog",
            name: name,
            url: url,
          },
          distribution: [
            {
              "@type": "DataDownload",
              encodingFormat: "application/pdf",
              contentUrl: url,
            },
            {
              "@type": "DataDownload",
              encodingFormat: "application/msword",
              contentUrl: url,
            },
            {
              "@type": "DataDownload",
              encodingFormat: "application/vnd.ms-powerpoint",
              contentUrl: url,
            },
          ],
          variableMeasured: {
            "@type": "PropertyValue",
            name: "Market Size",
            unitCode: "USD",
            value: marketSize, //replace by actual market size value
          },
          dataset: {
            "@type": "Table",
            name: `${name} REPORT HIGHLIGHTS`,
            about: description,
            url: `${url}#rd_table`,
          },
        }),
      }}
    />

    {/* Product Schema  */}
    <Script
      id="product-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Product",
          name: name,
          description: description,
          image: images.find((img) => img.type === "banner")?.url,
          sku: `${pubCode}-${id}`,
          offers: {
            "@type": "Offer",
            url: url,
            priceCurrency: "USD",
            price: parseFloat(price.replace(/,/g, "")),
            availability: "https://schema.org/InStock",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: 4.8,
            reviewCount: 1980,
          },
        }),
      }}
    />
  </>
);

export default DatasetJsonLd;
