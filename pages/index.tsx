import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import classnames from 'classnames';

import { BsSearch } from "react-icons/bs";

import styles from '../styles/Home.module.scss';

import Main from "../components/layouts/main/main.component";

const Home: NextPage = () =>
{
    return (
        <>
            <Head>
                <title>German Word</title>
                <meta name="description" content="Home Page German Word"/>
            </Head>

            <header className={classnames("container", styles.homeHeader)}>
                <div className={styles.homeHeaderLeft}>
                    <span className={styles.homeHeaderLeftImage}>
                        <Image src="/static/school.gif" alt="IntelligentQuantum German Word" height={250} width={250} />
                    </span>

                    <form className={styles.homeHeaderLeftForm}>
                        <input className={styles.homeHeaderLeftFormSearchInput} type="text" placeholder="Write a word" />
                        <button className={styles.homeHeaderLeftFormSearchButton}>
                            <BsSearch className={styles.homeHeaderLeftFormSearchButtonIcon} />
                        </button>
                    </form>
                </div>

                <div className={styles.homeHeaderRight}>
                    <span className={styles.homeHeaderRightImage}>
                        <Image src="/static/playground.gif" alt="IntelligentQuantum German Word" height={250} width={250} />
                    </span>

                    <p className={styles.homeHeaderRightP1}>
                        <span className={styles.homeHeaderRightP1SpanTop}>Dictionary of your</span>
                        <span className={styles.homeHeaderRightP1SpanBottom}>language in German</span>
                    </p>
                    <p className={styles.homeHeaderRightP2}>
                        Search for anything like words, sentences, idioms, etc. <br/> in German, even in your native language
                    </p>
                </div>
            </header>

            <Main>
                <h1 className="heading-primary">Which level do you want to learn?</h1>
                <span style={{ display: "flex", justifyContent: "center" }}>
                    <Image src="/static/book.gif" alt="IntelligentQuantum German Word" width={350} height={350} />
                </span>
                <section className={styles.sectionHomeLevel}>
                    <div className={styles.sectionHomeLevelBoxA}>
                        <span>
                            <Image src="/static/a.png" alt="IntelligentQuantum German Word" width={130} height={130} />
                        </span>

                        <p>
                            You can find commonly used sentences and phrases related to everyday situations (eg personal and family information, shopping, local geography, environment). It can be used in normal tasks that require simple exchange and information in the familiar and ordinary. You can explain your history, environment and issues of urgent need.
                        </p>

                        <Link href="/">
                            <a>I want to learn</a>
                        </Link>
                    </div>
                    <div className={styles.sectionHomeLevelBoxB}>
                        <span>
                            <Image src="/static/b.png" alt="IntelligentQuantum German Word" width={130} height={130} />
                        </span>

                        <p>
                            You can find commonly used sentences and phrases related to everyday situations (eg personal and family information, shopping, local geography, environment). It can be used in normal tasks that require simple exchange and information in the familiar and ordinary. You can explain your history, environment and issues of urgent need.
                        </p>

                        <Link href="/">
                            <a>I want to learn</a>
                        </Link>
                    </div>
                    <div className={styles.sectionHomeLevelBoxC}>
                        <span>
                            <Image src="/static/c.png" alt="IntelligentQuantum German Word" width={130} height={130} />
                        </span>

                        <p>
                            You can find commonly used sentences and phrases related to everyday situations (eg personal and family information, shopping, local geography, environment). It can be used in normal tasks that require simple exchange and information in the familiar and ordinary. You can explain your history, environment and issues of urgent need.
                        </p>

                        <Link href="/">
                            <a>I want to learn</a>
                        </Link>
                    </div>
                </section>
            </Main>


        </>
    )
}

export default Home;
