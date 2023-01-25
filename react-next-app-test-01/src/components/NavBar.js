import Link from 'next/link';
import styles from '@/styles/NavBar.module.css';

const NavBar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                </ul>
                <ul>
                    <li><Link href="/about">About</Link></li>
                </ul>
                <ul>
                    <li><Link href="/teams">Team</Link>
                        <div>
                            <ul className={styles.depth2}>
                                {/* <li><Link href="/teams">teams list</Link></li> */}
                                <li><Link href="/teams/teamAdd">Team add</Link></li>
                                <li><Link href="/teams/teamEdit">Team edit</Link></li>
                                <li><Link href="/teams/teamView">Team view</Link></li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li><Link href="/members">Member</Link>
                        <div>
                            <ul className={styles.depth2}>
                                {/* <li><Link href="/members">Member list</Link></li> */}
                                <li><Link href="/members/memberAdd">Member add</Link></li>
                                <li><Link href="/members/memberEdit">Member edit</Link></li>
                                <li><Link href="/members/memberView">Member view</Link></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
