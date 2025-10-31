const defaultData = {
  title: "AWOKEN VR",
  description: "AWOKEN VR // Make the unconscious conscious. Turn emapthy into a practice.",
  siteUrl: "https://awokenvr.com",
}

export const SEO = {
  metadataBase: new URL('https://awokenvr.com'),
  title: {
    default: defaultData.title,
    // template: `%s | ${defaultData.title}`
  },
  description: defaultData.description,

  generator: "Next.js",
  applicationName: defaultData.title,
  referrer: 'origin-when-cross-origin',
  keywords: ['virtual reality', 'vr', 'dei', 'de&i', 'diversity', 'equity', 'inclusion'],
  authors: { name: 'Tyler Huyser' },

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: defaultData.title,
    // images: ['/_assets/metedataImage.png'],
    description: defaultData.description,
    url: defaultData.siteUrl,
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: defaultData.title,
    description: defaultData.description,
    creator: "@GameSet_Blog",
    // images: ['/_assets/metedataImage.png']
  },

  verification: {
    google: ""
  }
}