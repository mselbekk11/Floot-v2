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
    <div className='bg-slate-900 max-w-5xl mx-auto'>
      <div>
        <div className='flex justify-between items-center'>
          <div>Discover</div>
          <div>Toggle</div>
        </div>
        <div className='grid grid-cols-4 gap-4 min-h-[500px]'>
          {categories.map((category) => (
            <div key={category.id} className='bg-slate-800 rounded-lg p-4'>
              {/* <img src={category.img} alt={category.title} /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
