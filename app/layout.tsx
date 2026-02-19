import type { Metadata } from 'next';
import {
  Geist,
  Geist_Mono,
  Source_Serif_4,
  Bricolage_Grotesque,
  Merriweather,
} from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: '--font-bricolage-grotesque',
  subsets: ['latin'],
});

const sourceSerif = Source_Serif_4({
  variable: '--font-source-serif',
  subsets: ['latin'],
});

const merriweather = Merriweather({
  variable: '--font-merriweather',
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
});

const paytoneOne = localFont({
  src: '../public/fonts/PaytoneOne-Regular.ttf',
  variable: '--font-paytone',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Floot v2',
    template: '%s | Floot',
  },
  description: 'Build powerful apps fast. without writing code.',
  // icons: {
  //   icon: "/favicon.svg",
  // },
  keywords: [
    'Floot',
    'Floot AI',
    'Floot App',
    'Floot Website',
    'Floot Development',
    'Floot Agency',
    'Floot Development Agency',
    'Floot Development Company',
    'Floot Development Services',
    'Floot Development Agency',
    'Floot Development Company',
    'Floot Development Services',
    'Floot Development Agency',
    'Floot Development Company',
  ],
  authors: [{ name: 'Morgan Selbekk' }],
  creator: 'Morgan Selbekk',
  publisher: 'Morgan Selbekk',

  metadataBase: new URL('https://floot-v2.vercel.app/'),

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://floot-v2.vercel.app/',
    title: 'Floot',
    description: 'Build powerful apps fast. without writing code.',
    siteName: 'Floot',
    images: [
      {
        url: 'https://floot-v2.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Floot',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Floot',
    description: 'Build powerful apps fast. without writing code.',
    creator: '@mselbekk1',
    images: ['https://floot-v2.vercel.app/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    // google: 'eHlquJ631zz_IvEw19K8S5UdbHhVtw891-TPvbQMb_w',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bricolageGrotesque.variable} ${sourceSerif.variable} ${merriweather.variable} ${paytoneOne.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
