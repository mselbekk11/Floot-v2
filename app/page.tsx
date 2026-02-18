// import Apps from '@/components/apps';
// import Discover from '@/components/discover';
// import FeatureBase from '@/components/feature-base';
// import FeaturesSliderSection from '@/components/features-carousel';
// import FooterSection from '@/components/footer';
// import HeaderEight from '@/components/header';
// import NavTwo from '@/components/nav-two';
import BentoFive from '@/components/bento-5';
import CallToAction from '@/components/call-to-action';
import DiscoverTwo from '@/components/discover-two';
import FeatureTwo from '@/components/feature-two';
import FooterTwo from '@/components/footer-two';
import HeroSection from '@/components/hero-section';
import NavThree from '@/components/nav-three';

export default function Page() {
  return (
    <div className='relative'>
      <NavThree />
      <HeroSection />
      <DiscoverTwo />
      <FeatureTwo />
      <BentoFive />
      <CallToAction />
      <FooterTwo />
    </div>
  );
}
