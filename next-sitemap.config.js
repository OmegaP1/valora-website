/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://valora.pt',
  generateRobotsTxt: true,
  exclude: ['/api/*', '/admin/*', '/thank-you'],
  alternateRefs: [
    {
      href: 'https://valora.pt/en',
      hreflang: 'en',
    },
    {
      href: 'https://valora.pt/pt',
      hreflang: 'pt',
    },
    {
      href: 'https://valora.pt/es',
      hreflang: 'es',
    },
    {
      href: 'https://valora.pt/fr',
      hreflang: 'fr',
    },
    {
      href: 'https://valora.pt/de',
      hreflang: 'de',
    },
    {
      href: 'https://valora.pt/zh',
      hreflang: 'zh',
    },
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
    ],
    additionalSitemaps: [
      'https://valora.pt/sitemap-portfolio.xml',
      'https://valora.pt/sitemap-resources.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq based on path
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.includes('/services')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.includes('/portfolio')) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path.includes('/about') || path.includes('/contact')) {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path.includes('/resources')) {
      priority = 0.6;
      changefreq = 'weekly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};