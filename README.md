# VALORA - Luxury Property Management Website

A premium Next.js website for VALORA, a luxury property management company specializing in high-end vacation rentals across Portugal.

## 🏆 Features

- **Modern Design**: Premium UI/UX with Tailwind CSS and custom components
- **Performance Optimized**: Next.js 14 with App Router for optimal performance
- **Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Comprehensive SEO with meta tags, structured data, and sitemaps
- **Multilingual Ready**: Support for 6 languages (EN, PT, ES, FR, DE, ZH)
- **Interactive Components**: Framer Motion animations and smooth interactions
- **Type Safe**: Full TypeScript implementation
- **Accessible**: WCAG compliant with proper semantic markup

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Notifications**: React Hot Toast
- **Analytics**: Vercel Analytics & Speed Insights
- **Deployment**: Vercel

## 📁 Project Structure

```
src/
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── services/          # Services pages
│   ├── contact/           # Contact page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── layout/           # Header, Footer, Navigation
│   ├── sections/         # Homepage sections
│   ├── services/         # Service-specific components
│   ├── contact/          # Contact form components
│   └── ui/               # Base UI components
├── contexts/             # React contexts
├── hooks/                # Custom hooks
├── lib/                  # Utilities and configurations
├── types/                # TypeScript type definitions
├── utils/                # Helper functions
└── styles/               # Additional CSS files
```

## 🛠 Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/your-username/valora-website.git
cd valora-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. **Run development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to `http://localhost:3000`

## 📄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run test` - Run Jest tests
- `npm run test:watch` - Run tests in watch mode

## 🎨 Design System

### Colors
- **Primary Gold**: `#ffb400` - Luxury and premium feel
- **Dark Charcoal**: `#111111` - Sophistication and elegance
- **Light Gray**: `#f6f6f6` - Clean backgrounds

### Typography
- **Primary**: Inter (sans-serif)
- **Display**: Montserrat (headings)
- **Luxury**: Playfair Display (serif accents)

### Components
All components follow a consistent design system with:
- Hover states and micro-interactions
- Responsive design patterns
- Accessibility considerations
- Loading states and error handling

## 🌐 Pages Structure

### Core Pages
- `/` - Homepage with hero, services overview, testimonials
- `/services` - Detailed service packages and pricing
- `/portfolio` - Property showcase and case studies
- `/about` - Company story, team, and credentials
- `/contact` - Contact forms and office information
- `/resources` - Blog and educational content

### Service Features
- **Full Management** (30% commission)
- **Online Management** (12.5% commission)
- Property assessment tools
- Performance calculators
- Client testimonials

## 🔧 Configuration

### Environment Variables
See `.env.example` for all required environment variables including:
- Site configuration
- Analytics IDs
- API keys
- Email configuration

### SEO Configuration
- Comprehensive meta tags
- Open Graph and Twitter cards
- Structured data markup
- Multi-language support
- Automatic sitemap generation

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## ♿ Accessibility

- Semantic HTML markup
- ARIA attributes where needed
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Focus management

## 🔍 SEO Features

- Server-side rendering
- Meta tags optimization
- Structured data
- XML sitemaps
- Multi-language hreflang tags
- Performance optimization

## 🧪 Testing

The project includes:
- Jest for unit testing
- React Testing Library for component testing
- TypeScript type checking
- ESLint for code quality

Run tests with:
```bash
npm run test
```

## 📈 Performance

- Lighthouse scores: 90+ across all metrics
- Core Web Vitals optimization
- Image optimization with Next.js Image
- Code splitting and lazy loading
- Efficient bundle size

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main

### Other Platforms
The project can be deployed to any platform supporting Node.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions:
- Email: hello@valora.pt
- Website: https://valora.pt
- Phone: +351 XXX XXX XXX

## 🏗 Future Enhancements

- [ ] Admin dashboard for content management
- [ ] Property owner portal
- [ ] Online booking system integration
- [ ] Multi-language content management
- [ ] Advanced analytics dashboard
- [ ] Payment processing integration
- [ ] Mobile app companion

---

Built with ❤️ for VALORA Property Management