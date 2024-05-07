import Link from 'next/link';

export default function Navigation() {
  
  return (
    <ul className='navClass center'>
      <li className='nav'>
        <Link href='/'>Home</Link>
      </li>
      <li className='nav'>
        <Link href='/cores/page/1'>Cores</Link>
      </li>
      <li className='nav'>
        <Link href='/launches/page/1'>Launches</Link>
      </li>
      <li className='nav'>
        <Link href='/launchpads/page/1'>Launchpads</Link>
      </li>
      <li className='nav'>
        <Link href='/payloads/page/1'>Payloads</Link>
      </li>
      <li className='nav'>
        <Link href='/rockets/page/1'>Rockets</Link>
      </li>
      <li className='nav'>
        <Link href='/ships/page/1'>Ships</Link>
      </li>

    </ul>
  );
}