import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import classnames from 'classnames';

import Main from '../components/layouts/main/main.component';

import { BsBookFill } from 'react-icons/bs';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () =>
{
    return (
        <>
            <Head>
                <title>German Word</title>
                <meta name='description' content='Home Page German Word'/>
            </Head>

            <header className={styles.homeHeader}>
                <div className={styles.homeHeaderLeft}>
                    <h1 className={styles.homeHeaderLeftTitle}>
                        An excellence center for education
                    </h1>
                    <p className={styles.homeHeaderLeftParagraph}>
                        German Word is the online learning platform that offers various courses for your development
                    </p>
                    <form className={styles.homeHeaderLeftForm}>
                        <input className={styles.homeHeaderLeftFormSearchInput} type='text' placeholder='Write a word' />
                        <button className={styles.homeHeaderLeftFormSearchButton}>
                            Search the world
                        </button>
                    </form>
                </div>
                <div className={styles.homeHeaderRight}>
                    <div className={styles.homeHeaderRightFirstBox}>
                        <i className={classnames(styles.homeHeaderRightFirstBoxIcon, 'green-background')}>
                            <BsBookFill />
                        </i>
                        <div className={styles.homeHeaderRightFirstBoxText}>
                            <h3 className={styles.homeHeaderRightFirstBoxTextTitle}>
                                110K
                            </h3>
                            <p className={styles.homeHeaderRightFirstBoxTextParagraph}>
                                Germany words
                            </p>
                        </div>
                    </div>
                    <span>
                        <Image src='/static/woman.png' alt='German Word' height={700} width={500} />
                    </span>
                </div>
            </header>
            <Main>
                <ul className={styles.homeHeaderList}>
                    <li className={styles.homeHeaderItem}>
                        <i className={classnames(styles.homeHeaderItemIcon, 'green-background')}>
                            <BsBookFill />
                        </i>
                        <p className={styles.homeHeaderItemParagraph}>
                            1,000+ Free best online courses
                        </p>
                    </li>
                    <li className={styles.homeHeaderItem}>
                        <i className={classnames(styles.homeHeaderItemIcon, 'pink-background')}>
                            <BsBookFill />
                        </i>
                        <p className={styles.homeHeaderItemParagraph}>
                            1,000+ Free best online courses
                        </p>
                    </li>
                    <li className={styles.homeHeaderItem}>
                        <i className={classnames(styles.homeHeaderItemIcon, 'blue_dark-background')}>
                            <BsBookFill />
                        </i>
                        <p className={styles.homeHeaderItemParagraph}>
                            1,000+ Free best online courses
                        </p>
                    </li>
                </ul>
                <section className={styles.homeMain}>
                    <div className={styles.homeMainBoxHeader}>
                        <h2 className={styles.homeMainBoxHeaderTitle}>
                            Why choose German Word?
                        </h2>
                        <p className={styles.homeMainBoxHeaderParagraph}>
                            we offer a wide range of opportunity for you. See what you will get and your benefits
                        </p>
                    </div>
                    <ul className={styles.homeMainBoxList}>
                        <li className={styles.homeMainBoxItem}>
                            <i className={classnames(styles.homeMainBoxItemIcon, 'yellow-background')}>
                                <BsBookFill />
                            </i>
                            <h2 className={styles.homeMainBoxItemTitle}>
                                Get certificate
                            </h2>
                            <p className={styles.homeMainBoxItemParagraph}>
                                We are providing a certificate to you after completing your course and this will help you future.
                            </p>
                        </li>
                        <li className={styles.homeMainBoxItem}>
                            <i className={classnames(styles.homeMainBoxItemIcon, 'green-background')}>
                                <BsBookFill />
                            </i>
                            <h2 className={styles.homeMainBoxItemTitle}>
                                Get certificate
                            </h2>
                            <p className={styles.homeMainBoxItemParagraph}>
                                We are providing a certificate to you after completing your course and this will help you future.
                            </p>
                        </li>
                        <li className={styles.homeMainBoxItem}>
                            <i className={classnames(styles.homeMainBoxItemIcon, 'pink-background')}>
                                <BsBookFill />
                            </i>
                            <h2 className={styles.homeMainBoxItemTitle}>
                                Get certificate
                            </h2>
                            <p className={styles.homeMainBoxItemParagraph}>
                                We are providing a certificate to you after completing your course and this will help you future.
                            </p>
                        </li>
                    </ul>
                </section>
            </Main>
        </>
    )
}

export default Home;
