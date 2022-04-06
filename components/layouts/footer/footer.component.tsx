import Link from 'next/link';
import classnames from 'classnames';
import { BsDiscord, BsGithub, BsInstagram } from 'react-icons/bs';

import styles from './footer.module.scss';

function Footer()
{
    return (
        <footer className={classnames("container", styles.footer)}>
            <p>© German Word 2022</p>
            <p>Made with love by <Link href="https://www.instagram.com/IntelligentQuantum"><a>IntelligentQuantum</a></Link></p>

            <ul className={styles.footerItemSocial}>
                <li className={styles.footerItemSocialList}>
                    <a className={styles.footerItemSocialLink} href="https://www.instagram.com/IntelligentQuantum">
                        <BsInstagram />
                    </a>
                </li>
                <li className={styles.footerItemSocialList}>
                    <a className={styles.footerItemSocialLink} href="https://github.com/intelligentquantum">
                        <BsGithub />
                    </a>
                </li>
                <li className={styles.footerItemSocialList}>
                    <a className={styles.footerItemSocialLink} href="https://discord.gg/V87k9kTzRg">
                        <BsDiscord />
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
