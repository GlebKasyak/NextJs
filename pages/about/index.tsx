import { NextPage  } from 'next'
import { useRouter } from "next/router";

import { MainLayout } from "../../components";
import { HOME, POSTS } from "../../shared/routers";

type AboutProps = {
    title: string
}

const About: NextPage<AboutProps> = ({ title }) => {
    const router = useRouter()

    const linkClickHandler = (path: string, e: MouseEvent) => {
        e.preventDefault()
        router.push(path)
    }

    return (
        <MainLayout title="About" >
            <h1>{title}</h1>
            <button onClick={linkClickHandler.bind(null, HOME)} >Go back to home</button>
            <button onClick={linkClickHandler.bind(null, POSTS)} >Go back to posts</button>
        </MainLayout>
    )
};

About.getInitialProps = async (): Promise<AboutProps> => {
    const response = await fetch(`${process.env.API_URL}/about`);
    const { title } = await response.json();

    return {
        title
    }
};

export default About;