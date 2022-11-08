import orangeLogo from '../assets/orange-juice-logo.png';

function Sidebar() {
  return (
    <nav className='bg-evolution h-screen w-72 flex flex-col justify-between'>
      <div className='flex flex-col gap-12 justify-center items-center	'>
        <div className='p-14'>
          <img src={orangeLogo} alt='Orange Juice logo' className='w-40' />
        </div>
        <ul className='flex flex-col gap-4 w-full items-end'>
          <li className='bg-white w-64 p-3 rounded-l-3xl'>Home</li>
          <li className='bg-white w-64 p-3 rounded-l-3xl'>Home</li>
          <li className='bg-white w-64 p-3 rounded-l-3xl'>Home</li>
          <li className='bg-white w-64 p-3 rounded-l-3xl'>Home</li>
        </ul>
      </div>
      <div className='p-14'>Sair</div>
    </nav>
  );
}

export default Sidebar;
