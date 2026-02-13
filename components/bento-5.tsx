import FeaturesSectionEleven from './features-11';

export default function BentoFive() {
  return (
    <section className='bg-[#232325] texture-four @container'>
      <div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage: 'url(/stars.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '500px',
          opacity: 0.6,
        }}
      ></div>

      <FeaturesSectionEleven />
    </section>
  );
}
