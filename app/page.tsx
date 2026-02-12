import BentoFour from '@/components/bento-4';
import BentoFive from '@/components/bento-5';
import CallToAction from '@/components/call-to-action';
import Discover from '@/components/discover';
import FeatureBase from '@/components/feature-base';
import FooterSection from '@/components/footer';
import HeroSection from '@/components/hero-section';
import NavTwo from '@/components/nav-two';

export default function Page() {
  return (
    <>
      <NavTwo />
      <HeroSection />
      <Discover />
      {/* <DiscoverTwo /> */}
      {/* <FeaturesSectionNine /> */}
      {/* <FeaturesSectionTen /> */}
      <FeatureBase />
      {/* <BentoFour /> */}
      <BentoFive />
      <CallToAction />
      <FooterSection />

      {/* <FeaturesSectionA />
      <FeaturesSectionB />
      <FeaturesSectionC /> */}
    </>
  );
}
