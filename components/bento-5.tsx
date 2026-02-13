import FeaturesSectionEleven from './features-11';

export default function BentoFive() {
  return (
    <section className='bg-[#232325] @container relative'>
      <div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage: 'url(/stars.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '500px',
          opacity: 0.4,
        }}
      ></div>

      <FeaturesSectionEleven />
    </section>
  );
}
