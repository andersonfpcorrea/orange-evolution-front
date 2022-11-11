import { MdKeyboardBackspace } from 'react-icons/md';

function BackNavArrow() {
  return (
    <div className='fixed top-[-48px] left-[-42px]'>
      <MdKeyboardBackspace style={{ width: '24px', height: '24px' }} />
    </div>
  );
}

export default BackNavArrow;