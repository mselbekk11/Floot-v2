import Apps from '@/components/apps';
import BentoFive from '@/components/bento-5';
import CallToAction from '@/components/call-to-action';
import Discover from '@/components/discover';
import FeatureBase from '@/components/feature-base';
import FeaturesSliderSection from '@/components/features-carousel';
// import FooterSection from '@/components/footer';
import FooterTwo from '@/components/footer-two';
// import HeaderEight from '@/components/header';
import HeroSection from '@/components/hero-section';
import NavTwo from '@/components/nav-two';

export default function Page() {
  return (
    <div className='relative'>
      <NavTwo />
      <HeroSection />
      {/* <FeaturesSliderSection /> */}
      {/* <Apps /> */}
      <Discover />
      <FeatureBase />
      <BentoFive />
      <CallToAction />
      <FooterTwo />
    </div>
  );
}
