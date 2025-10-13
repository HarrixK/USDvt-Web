import Head from 'next/head';

export interface MetaTagsProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

export const generateMetaTags = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage = '/favicon.webp',
  ogUrl,
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
  canonicalUrl,
  noIndex = false
}: MetaTagsProps) => {
  const siteName = 'USDvt - Trusted Digital Dollar';
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://usdvt.com';
  
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`} />
      <meta property="og:url" content={ogUrl || canonicalUrl || baseUrl} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={twitterTitle || ogTitle || title} />
      <meta name="twitter:description" content={twitterDescription || ogDescription || description} />
      <meta name="twitter:image" content={twitterImage || ogImage} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#ffffff" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="USDvt" />
    </Head>
  );
};

// Predefined meta tags for common pages
export const metaConfigs = {
  home: {
    title: 'USDvt - Trusted Digital Dollar | Stable, Secure, Compliant',
    description: 'USDvt is a trusted digital dollar backed by U.S. banks and built for regulatory compliance. Send, receive, and save with a stablecoin designed for real-world use.',
    keywords: 'digital dollar, stablecoin, USDvt, cryptocurrency, blockchain, payments, fintech, compliance',
    ogTitle: 'USDvt - The Trusted Digital Dollar for Everyone',
    ogDescription: 'Experience the future of money with USDvt - a stable, secure, and compliant digital dollar backed by U.S. banks.',
  },
  
  about: {
    title: 'About USDvt | Building Trust in Digital Money',
    description: 'Learn about USDvt\'s mission to create a trusted digital dollar backed by U.S. banks. Discover our values, story, and commitment to regulatory compliance.',
    keywords: 'about USDvt, digital dollar company, stablecoin team, fintech mission, regulatory compliance',
    ogTitle: 'About USDvt - Building Trust in Digital Money',
    ogDescription: 'Discover how USDvt is building a trusted digital dollar backed by U.S. banks and designed for regulatory compliance.',
  },
  
  business: {
    title: 'USDvt for Business | Faster, Cheaper Payments',
    description: 'Power your business with USDvt\'s faster and cheaper payment solutions. Send global payouts, automate vendor flows, and save on fees without bank delays.',
    keywords: 'business payments, corporate treasury, vendor payments, global payouts, fintech solutions, USDvt business',
    ogTitle: 'USDvt for Business - Faster, Cheaper Payments',
    ogDescription: 'Transform your business payments with USDvt - faster settlements, reduced fees, and global reach without bank delays.',
  },
  
  institution: {
    title: 'USDvt for Institutions | Enterprise Digital Finance',
    description: 'Power your institution with USDvt\'s compliant, fast, and transparent digital finance platform. Built for scale, security, and regulatory oversight.',
    keywords: 'institutional finance, enterprise stablecoin, digital assets, financial institutions, compliance, USDvt institutions',
    ogTitle: 'USDvt for Institutions - Enterprise Digital Finance',
    ogDescription: 'Empower your institution with USDvt\'s compliant digital finance platform designed for scale, security, and regulatory oversight.',
  },
  
  retail: {
    title: 'USDvt for Retail | Control Your Digital Dollars',
    description: 'Take control of your digital dollars with USDvt. Send, save, and get paid with a stable, simple digital dollar that\'s always available.',
    keywords: 'personal finance, digital wallet, stablecoin, retail banking, digital payments, USDvt retail',
    ogTitle: 'USDvt for Retail - Control Your Digital Dollars',
    ogDescription: 'Take control of your money with USDvt - a stable, simple digital dollar for everyday use without bank fees.',
  },
  
  partner: {
    title: 'Partner with USDvt | Join Our Ecosystem',
    description: 'Become a USDvt partner and unlock new opportunities in payments, DeFi, and digital finance. Join our growing ecosystem of trusted partners.',
    keywords: 'USDvt partners, fintech partnerships, digital finance ecosystem, payment partners, blockchain partnerships',
    ogTitle: 'Partner with USDvt - Join Our Ecosystem',
    ogDescription: 'Join USDvt\'s ecosystem of trusted partners and unlock new opportunities in digital finance and payments.',
  },
  
  contact: {
    title: 'Contact USDvt | Get in Touch',
    description: 'Get in touch with the USDvt team. Contact us for partnerships, support, or to learn more about our trusted digital dollar solutions.',
    keywords: 'contact USDvt, support, partnerships, digital dollar support, fintech contact',
    ogTitle: 'Contact USDvt - Get in Touch',
    ogDescription: 'Connect with the USDvt team for partnerships, support, or to learn more about our trusted digital dollar solutions.',
  },
  
  comingSoon: {
    title: 'USDvt Coming Soon | Trusted Digital Dollar',
    description: 'USDvt is coming soon. Get ready for a trusted digital dollar backed by U.S. banks and built for regulatory compliance.',
    keywords: 'USDvt coming soon, digital dollar launch, stablecoin release, fintech launch',
    ogTitle: 'USDvt Coming Soon - Trusted Digital Dollar',
    ogDescription: 'Get ready for USDvt - the trusted digital dollar backed by U.S. banks, coming soon.',
  },
  
  privacy: {
    title: 'Privacy Policy | USDvt',
    description: 'Read USDvt\'s privacy policy to understand how we collect, use, and protect your personal information.',
    keywords: 'USDvt privacy policy, data protection, privacy, GDPR, data security',
    ogTitle: 'Privacy Policy - USDvt',
    ogDescription: 'Learn about USDvt\'s commitment to privacy and data protection in our comprehensive privacy policy.',
  },
  
  terms: {
    title: 'Terms and Conditions | USDvt',
    description: 'Read USDvt\'s terms and conditions to understand the terms of use for our digital dollar platform.',
    keywords: 'USDvt terms, terms of service, legal terms, user agreement',
    ogTitle: 'Terms and Conditions - USDvt',
    ogDescription: 'Review USDvt\'s terms and conditions for using our trusted digital dollar platform.',
  }
};
