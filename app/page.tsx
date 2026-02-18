// import Apps from '@/components/apps';
// import Discover from '@/components/discover';
// import FeatureBase from '@/components/feature-base';
// import FeaturesSliderSection from '@/components/features-carousel';
// import FooterSection from '@/components/footer';
// import HeaderEight from '@/components/header';
// import NavTwo from '@/components/nav-two';
// import BentoFive from '@/components/bento-5';
// import CallToAction from '@/components/call-to-action';
import BentoSix from '@/components/bento-6';
import CTATwo from '@/components/cta-two';
import DiscoverTwo from '@/components/discover-two';
import Extras from '@/components/extras';
import Yours from '@/components/yours';
import FeatureTwo from '@/components/feature-two';
import FooterTwo from '@/components/footer-two';
import HeroSection from '@/components/hero-section';
import NavThree from '@/components/nav-three';
import Image from 'next/image';

export default function Page() {
  return (
    <div className='relative'>
      <NavThree />
      <HeroSection />
      <DiscoverTwo />
      <FeatureTwo />
      <BentoSix />
      <Extras />
      <Yours />
      {/* CTA section with background images */}
      <section className='relative overflow-hidden py-16 md:py-30'>
        {/* Background layer 1 — 14.jpg */}
        <Image
          src='/14.jpg'
          alt=''
          fill
          className='object-cover pointer-events-none z-[2] opacity-40'
        />
        {/* Background layer 2 — 47.jpg */}
        <Image
          src='/47.jpg'
          alt=''
          fill
          className='object-cover pointer-events-none z-[1] opacity-60'
        />
        <div className='relative z-10 mx-auto max-w-[1240px] px-4'>
          <CTATwo />
        </div>
      </section>

      <FooterTwo />
    </div>
  );
}
