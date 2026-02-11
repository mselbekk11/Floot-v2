import BentoFour from '@/components/bento-4';
import CallToAction from '@/components/call-to-action';
import Discover from '@/components/discover';
// import DiscoverTwo from '@/components/discover-two';
import FeaturesSectionNine from '@/components/features-9';
import FooterSection from '@/components/footer';
import HeroSection from '@/components/hero-section';
import NavTwo from '@/components/nav-two';
// import FeaturesSectionA from '@/components/features-1-a';
// import FeaturesSectionB from '@/components/features-1-b';
// import FeaturesSectionC from '@/components/features-1-c';

export default function Page() {
  return (
    <>
      <NavTwo />
      <HeroSection />
      <Discover />
      {/* <DiscoverTwo /> */}
      <FeaturesSectionNine />
      <BentoFour />
      <CallToAction />
      <FooterSection />
      <div className='h-[1000px] w-full'>
        hello
      </div>

      {/* <FeaturesSectionA />
      <FeaturesSectionB />
      <FeaturesSectionC /> */}
    </>
  );
}
