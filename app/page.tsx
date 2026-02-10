import BentoFour from '@/components/bento-4';
import CallToAction from '@/components/call-to-action';
import Discover from '@/components/discover';
import FeaturesSectionNine from '@/components/features-9';
import HeroSection from '@/components/hero-section';
// import FeaturesSectionA from '@/components/features-1-a';
// import FeaturesSectionB from '@/components/features-1-b';
// import FeaturesSectionC from '@/components/features-1-c';

export default function Page() {
  return (
    <>
      <HeroSection />
      <Discover />
      <FeaturesSectionNine />
      <BentoFour />
      <CallToAction />
      
      {/* <FeaturesSectionA />
      <FeaturesSectionB />
      <FeaturesSectionC /> */}
    </>
  );
}
