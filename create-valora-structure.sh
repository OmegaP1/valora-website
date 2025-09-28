#!/bin/bash

# VALORA Website Project Structure Creation Script
# This script creates only the folder structure and empty files

echo "🏗️  Creating VALORA Project Structure..."
echo "================================="

# Create project directory
PROJECT_NAME="valora-website"
if [ ! -d "$PROJECT_NAME" ]; then
    mkdir "$PROJECT_NAME"
fi

cd "$PROJECT_NAME"

echo "📁 Creating folders..."

# Root directories
mkdir -p src
mkdir -p public/images
mkdir -p docs
mkdir -p tests

# App directory structure (Next.js 14 App Router)
mkdir -p src/app/services
mkdir -p src/app/contact
mkdir -p src/app/portfolio
mkdir -p src/app/about
mkdir -p src/app/resources

# Components structure
mkdir -p src/components/layout
mkdir -p src/components/sections
mkdir -p src/components/services
mkdir -p src/components/contact
mkdir -p src/components/ui

# Other source directories
mkdir -p src/contexts
mkdir -p src/hooks
mkdir -p src/lib
mkdir -p src/types
mkdir -p src/utils
mkdir -p src/styles
mkdir -p src/services

echo "📄 Creating files..."

# Root configuration files
touch package.json
touch next.config.js
touch tailwind.config.js
touch tsconfig.json
touch postcss.config.js
touch .eslintrc.json
touch .prettierrc
touch .gitignore
touch .env.example
touch middleware.js
touch vercel.json
touch next-sitemap.config.js
touch jest.config.js
touch jest.setup.js
touch README.md

# App Router files
touch src/app/layout.tsx
touch src/app/page.tsx
touch src/app/loading.tsx
touch src/app/error.tsx
touch src/app/not-found.tsx

# Services pages
touch src/app/services/page.tsx
touch src/app/services/layout.tsx

# Contact pages
touch src/app/contact/page.tsx

# Portfolio pages
touch src/app/portfolio/page.tsx

# About pages
touch src/app/about/page.tsx

# Resources pages
touch src/app/resources/page.tsx

# Layout components
touch src/components/layout/Header.tsx
touch src/components/layout/Footer.tsx
touch src/components/layout/Navigation.tsx

# Homepage sections
touch src/components/sections/HeroSection.tsx
touch src/components/sections/ServicesOverview.tsx
touch src/components/sections/WhyChooseValora.tsx
touch src/components/sections/FeaturedProperties.tsx
touch src/components/sections/TestimonialsSection.tsx
touch src/components/sections/ServiceAreas.tsx
touch src/components/sections/CTASection.tsx

# Services components
touch src/components/services/ServicesHero.tsx
touch src/components/services/ServiceComparison.tsx
touch src/components/services/FullManagementSection.tsx
touch src/components/services/OnlineManagementSection.tsx
touch src/components/services/ProcessOverview.tsx
touch src/components/services/PricingCalculator.tsx
touch src/components/services/ServicesFAQ.tsx
touch src/components/services/ServicesTestimonials.tsx

# Contact components
touch src/components/contact/ContactHero.tsx
touch src/components/contact/ContactForm.tsx
touch src/components/contact/ContactInfo.tsx
touch src/components/contact/OfficeLocations.tsx
touch src/components/contact/ContactFAQ.tsx

# UI components
touch src/components/ui/Button.tsx
touch src/components/ui/Modal.tsx
touch src/components/ui/Input.tsx
touch src/components/ui/Card.tsx
touch src/components/ui/Badge.tsx
touch src/components/ui/Loading.tsx
touch src/components/ui/Toast.tsx

# Contexts
touch src/contexts/ThemeContext.tsx
touch src/contexts/ToastContext.tsx
touch src/contexts/LanguageContext.tsx

# Hooks
touch src/hooks/useLocalStorage.ts
touch src/hooks/useDebounce.ts
touch src/hooks/useIntersectionObserver.ts
touch src/hooks/useScrollPosition.ts

# Lib
touch src/lib/supabase.ts
touch src/lib/analytics.ts
touch src/lib/auth.ts
touch src/lib/email.ts

# Types
touch src/types/index.ts
touch src/types/api.ts
touch src/types/components.ts

# Utils
touch src/utils/index.ts
touch src/utils/constants.ts
touch src/utils/validations.ts

# Styles
touch src/styles/globals.css
touch src/styles/components.css

# Services
touch src/services/api.ts
touch src/services/emailService.ts
touch src/services/analyticsService.ts

# Public assets placeholders
touch public/favicon.ico
touch public/site.webmanifest
touch public/robots.txt
touch public/sitemap.xml

# Create placeholder image folders
mkdir -p public/images/hero
mkdir -p public/images/properties
mkdir -p public/images/team
mkdir -p public/images/testimonials
mkdir -p public/images/locations

# Documentation
touch docs/README.md
touch docs/DEPLOYMENT.md
touch docs/CONTRIBUTING.md

# Tests
touch tests/setup.ts
touch tests/components.test.tsx
touch tests/utils.test.ts

echo "✅ Project structure created successfully!"
echo ""
echo "📂 Project Overview:"
echo "├── src/"
echo "│   ├── app/                    # Next.js 14 App Router"
echo "│   │   ├── services/"
echo "│   │   ├── contact/"
echo "│   │   ├── portfolio/"
echo "│   │   ├── about/"
echo "│   │   └── resources/"
echo "│   ├── components/             # React components"
echo "│   │   ├── layout/"
echo "│   │   ├── sections/"
echo "│   │   ├── services/"
echo "│   │   ├── contact/"
echo "│   │   └── ui/"
echo "│   ├── contexts/               # React contexts"
echo "│   ├── hooks/                  # Custom hooks"
echo "│   ├── lib/                    # Utilities and configs"
echo "│   ├── types/                  # TypeScript definitions"
echo "│   ├── utils/                  # Helper functions"
echo "│   ├── styles/                 # CSS files"
echo "│   └── services/               # API services"
echo "├── public/                     # Static assets"
echo "├── docs/                       # Documentation"
echo "└── tests/                      # Test files"
echo ""
echo "🚀 Next steps:"
echo "1. cd $PROJECT_NAME"
echo "2. Copy the file contents from the previous artifacts"
echo "3. npm install"
echo "4. npm run dev"
echo ""
echo "Happy coding! 🎉"