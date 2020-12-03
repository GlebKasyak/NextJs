import Link from "next/link"

import { MainLayout } from "../components";
import { ABOUT, POSTS } from "../shared/routers";

export default () => (
    <MainLayout title="NextJs title" >
        <h1>Hello Next.JS</h1>
        <p><Link href={ABOUT}>About</Link></p>
        <p><Link href={POSTS}>Posts</Link></p>
    </MainLayout>
)