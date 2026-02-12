import FeatureA from './feature-a';
import FeatureB from './feature-b';
import FeatureC from './feature-c';

export default function FeatureBase() {
  return (
    <div className='bg-[#FFFFFF] min-h-[600px] relative overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-r from-purple-300/10 via-indigo-300/10 to-pink-300/10 [mask-image:linear-gradient(to_bottom,rgba(255,255,255,1)_75%,rgba(255,255,255,0))]' />
      <div className='relative'>
        {/* Top gradient blur glow */}
        <div className='rotate-3 absolute -inset-x-12 -top-6 h-12 bg-linear-to-r from-sky-300 via-indigo-300 to-pink-300 blur-3xl' />
        {/* Gradient overlay with fade mask */}
        <div className='absolute inset-0 bg-linear-to-r from-sky-300/10 via-indigo-300/10 to-pink-300/10 mask-[linear-gradient(to_bottom,rgba(255,255,255,1)_75%,rgba(255,255,255,0))]' />
        <FeatureA />
        <FeatureB />
        <FeatureC />
      </div>
    </div>
  );
}
