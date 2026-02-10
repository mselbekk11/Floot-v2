export default function Discover() {
  const categories = [
    {
      id: 1,
      img: '',
      title: 'all',
      description: 'All',
      users: '',
      loves: 1,
      link: '/',
    },
    {
      id: 2,
      img: '',
      title: 'all',
      description: 'All',
      users: '',
      loves: 1,
      link: '/',
    },
    {
      id: 3,
      img: '',
      title: 'all',
      description: 'All',
      users: '',
      loves: 1,
      link: '/',
    },
    {
      id: 4,
      img: '',
      title: 'all',
      description: 'All',
      users: '',
      loves: 1,
      link: '/',
    },
  ];

  return (
    <div className='bg-zinc-900'>
      <div className=' max-w-7xl mx-auto py-20'>
        <div>
          <div className='flex justify-between items-center mb-4'>
            <div className='text-white'>Discover</div>
            <div className='text-white'>Toggle</div>
          </div>
          <div className='grid grid-cols-4 gap-4 min-h-[300px]'>
            {categories.map((category) => (
              <div key={category.id} className=' rounded-lg p-4 bg-white'>
                {/* <img src={category.img} alt={category.title} /> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
