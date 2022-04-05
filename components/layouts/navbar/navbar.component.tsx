import Link from 'next/link';
import classnames from 'classnames';

import { BsInstagram, BsGithub, BsDiscord } from "react-icons/bs";

import styles from './navbar.module.scss';

const Navbar = () =>
{
    return (
        <nav className={classnames("container", styles.nav)}>
            <div className={styles.navLogo}>
                <h1>German Word!</h1>
            </div>

            <ul className={styles.navItemLinks}>
                <li className={styles.navItemLinksList}>
                    <Link href="/">
                        <a className={styles.navItemLinksLink}>Home</a>
                    </Link>
                </li>
                <li className={styles.navItemLinksList}>
                    <Link href="/">
                        <a className={styles.navItemLinksLink}>Dictionary</a>
                    </Link>
                </li>
                <li className={styles.navItemLinksList}>
                    <Link href="/">
                        <a className={styles.navItemLinksLink}>Flash Cards</a>
                    </Link>
                </li>
                <li className={styles.navItemLinksList}>
                    <Link href="/">
                        <a className={styles.navItemLinksLink}>About</a>
                    </Link>
                </li>
            </ul>

            <ul className={styles.navItemSocial}>
                <li className={styles.navItemSocialList}>
                    <a className={styles.navItemSocialLink} href="https://www.instagram.com/IntelligentQuantum">
                        <BsInstagram />
                    </a>
                </li>
                <li className={styles.navItemSocialList}>
                    <a className={styles.navItemSocialLink} href="https://github.com/intelligentquantum">
                        <BsGithub />
                    </a>
                </li>
                <li className={styles.navItemSocialList}>
                    <a className={styles.navItemSocialLink} href="https://discord.gg/V87k9kTzRg">
                        <BsDiscord />
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
