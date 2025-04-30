/*
Updated Next.js 14 App Router scaffold for Burgers Cartel with Hero video & WhatsApp integration
*/

// package.json remains unchanged

// next.config.js remains unchanged

// vercel.json remains unchanged

// app/layout.jsx
import './styles/globals.css';
import Header from './components/Header';

export const metadata = {
  title: 'Burgers Cartel',
  description: 'Flavors You Can\'t Refuse'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

// app/page.jsx
import Hero from './components/Hero';
import FilterTabs from './components/FilterTabs';
import BurgerGrid from './components/BurgerGrid';
import AboutUs from './components/AboutUs';
import Reviews from './components/Reviews';

export default function Home() {
  return (
    <main>
      <Hero />
      <FilterTabs />
      <BurgerGrid />
      <AboutUs />
      <Reviews />
    </main>
  );
}

// app/styles/globals.css
:root {
  --primary: #F2AA21;
  --secondary: #000000;
  --background: #FFFFFF;
}
body { margin: 0; font-family: 'Montserrat', sans-serif; }
h1,h2,h3,h4,h5,h6 { font-family: 'Cinzel', serif; }

// components/Header.jsx
'use client';
import Link from 'next/link';
import Image from 'next/image';
import whatsappIcon from '/public/assets/vectors/icon-whatsapp.svg';

export default function Header() {
  return (
    <header style={{ position: 'sticky', top: 0, backgroundColor: 'var(--secondary)', padding: '0.5rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1000 }}>
      <Link href="/">
        <Image src="/assets/logo.png" alt="Burgers Cartel" width={300} height={90} />
      </Link>
      <nav style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {/* Side-drawer toggle will go here */}
        <Link href="https://wa.me/923375561898" target="_blank" aria-label="Chat on WhatsApp">
          <Image src={whatsappIcon} alt="WhatsApp" width={48} height={48} />
        </Link>
      </nav>
    </header>
  );
}

// components/Hero.jsx
'use client';

export default function Hero() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '60vh', overflow: 'hidden' }}>
      <video
        src="/assets/video/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ background: 'rgba(0,0,0,0.5)', padding: '1rem 2rem', borderRadius: '8px' }}>
          <h1 style={{ color: '#FFF', fontSize: '2rem', fontFamily: 'Cinzel, serif', margin: 0 }}>Cartel Deal: 10% Off Your First Order</h1>
          <button style={{ marginTop: '1rem', padding: '0.75rem 1.5rem', fontSize: '1rem', backgroundColor: 'var(--primary)', color: '#FFF', border: 'none', borderRadius: '24px', cursor: 'pointer' }}>Order Now</button>
        </div>
      </div>
    </div>
  );
}

// the rest of components remain unchanged

// components/FilterTabs.jsx ...
// components/BurgerGrid.jsx ...
// components/BurgerCard.jsx ...
// components/AboutUs.jsx ...
// components/Reviews.jsx ...

// API route /api/reviews remains unchanged

// README.md remains unchanged
