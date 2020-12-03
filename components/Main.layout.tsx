import Link from "next/link";
import Head from "next/head"
import { FC } from "react";

import {ABOUT, POSTS, HOME} from "../shared/routers";

type MainLayoutProps = {
    title: string
}

const MainLayout: FC<MainLayoutProps> = ({ children, title }) => {
    return (
        <>
            <Head >
                <title>{ title } | Next Course</title>
                <meta name="keywords" content="next,javascript,nextjs" />
                <meta name="description" content="the first nextjs app" />
                <meta charSet="utf-8" />
            </Head>
            <nav>
                <Link href={HOME}><a>Home</a></Link>
                <Link href={ABOUT}><a>About</a></Link>
                <Link href={POSTS}><a>Posts</a></Link>
            </nav>
            <main>
                { children }
            </main>
            <style jsx >{`
                nav {
                    position: fixed;
                    height: 3rem;
                    left: 0;
                    right: 0;
                    background-color: darkblue;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }

                nav a {
                    color: #fff;
                    text-decoration: none;
                }
                
                main {
                    padding-top: 3rem;
                }
            `}</style>
        </>
    )
};

export default MainLayout;
