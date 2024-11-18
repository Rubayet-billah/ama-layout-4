import Head from "next/head";

export default function SEO({ title = "", description = "", keywords = "" }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {/* <meta name="abstract" content={abstract} /> */}

      {/* <link rel="canonical" href={canonicalUrl} />
      <link rel="shortlink" href={canonicalUrl} /> */}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={"marketinsights"} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={process.env.BASE_URL} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={DefaultSeo.twitterSite} />
      <meta name="twitter:image" content={imageUrl} /> */}

      <link rel="icon" href="/favicon.ico" />
      <meta name="MobileOptimized" content="width" />
      {/* <meta name="HandheldFriendly" content="true" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="news_keywords" content={keywords} />
      <meta name="rights" content="Planndesign" />
      <link rel="image_src" href={imageUrl} /> */}
    </Head>
  );
}
