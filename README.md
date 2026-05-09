# MD Mechatronica - Professional Machine Service Website

Modern, responsive website for MD Mechatronica - a professional industrial machinery service company specializing in Müller Martini, Kolbus, and Hörauf printing equipment.

## 🚀 Features

- **Modern Design**: Clean, professional industrial design with smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Performance Optimized**: Built with Next.js 15 for optimal performance
- **SEO Ready**: Proper meta tags and semantic HTML structure
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Contact Form**: Easy-to-use contact form for client inquiries

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & Poppins (Google Fonts)

## 📦 Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
/app
  ├── layout.tsx       # Root layout with metadata
  ├── page.tsx         # Home page
  └── globals.css      # Global styles and Tailwind config

/components
  ├── Header.tsx       # Navigation header with mobile menu
  ├── Hero.tsx         # Hero section with CTA
  ├── Services.tsx     # Services showcase
  ├── About.tsx        # About company section
  ├── Values.tsx       # Core values section
  ├── Stats.tsx        # Statistics section
  ├── Projects.tsx     # Projects portfolio
  ├── Contact.tsx      # Contact form and info
  └── Footer.tsx       # Footer with links and info
```

## 🎨 Customization

### Colors

Edit the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: '#1a56db',    // Main brand color
  secondary: '#f59e0b',  // Accent color
  dark: '#0f172a',       // Dark backgrounds
}
```

### Content

Update company information in:
- `components/Header.tsx` - Logo and navigation
- `components/Hero.tsx` - Main headline and stats
- `components/Services.tsx` - Service offerings
- `components/Contact.tsx` - Contact details
- `components/Footer.tsx` - Footer information

## 📱 Sections

1. **Header** - Sticky navigation with mobile menu
2. **Hero** - Eye-catching introduction with CTA buttons
3. **Services** - 6 main service categories
4. **About** - Company overview with image gallery
5. **Values** - Core company values
6. **Stats** - Key statistics and achievements
7. **Projects** - Portfolio of recent work
8. **Contact** - Contact form and business information
9. **Footer** - Links, contact info, and social media

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
```

Deploy to Vercel with one click or via CLI:

```bash
vercel
```

### Other Platforms

Build the production version:

```bash
npm run build
npm start
```

## 📄 License

© 2026 MD Mechatronica Michał Dudek. All rights reserved.

## 📞 Contact

- **Phone**: +48 666 211 626
- **Email**: office@md-mechatronica.com
- **Address**: Ul. Przedwiośnia 23, 05-500 Piaseczno, Poland
