import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header} >
        <div>
            <Link href='/'>
                <a>DJ EVENT</a>
            </Link>
        </div>
        <nav>
            <ul>
                <li>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href='/about'>
                        <a>Abouts</a>
                    </Link>
                </li>
                <li>
                    <Link href='/events'>
                        <a>Events</a>
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        <a>404</a>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header