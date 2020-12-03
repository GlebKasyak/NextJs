import Link from "next/link";
import { NextPage } from "next";
import { useState, useEffect } from "react";

import { MainLayout, Loader } from "../components";
import { POST } from "../shared/routers";
import { PostType } from "../types/post.type";

type PostsProps = {
    posts: Array<PostType> | null
}

const Posts: NextPage<PostsProps> = ({ posts: serverPosts }) => {
    const [posts, setPosts] = useState(serverPosts);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.API_URL}/posts`);
            const data = await response.json();
            setPosts(data);
        }

        if(!serverPosts) {
            fetchData()
        }
    }, [])

    return (
        <MainLayout title="Post page" >
            { posts && posts.length
                ? (
                    <>
                        <h1>Posts page</h1>
                        <ul>
                            {posts.map(post => (
                                <li key={post.id} >
                                    <Link href={POST} as={`/post/${post.id}`}>{post.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </>)
                : <Loader />
            }
        </MainLayout>
    )
}

Posts.getInitialProps = async ({ req }): Promise<PostsProps> => {
    if(!req) {
        return {
            posts: null
        }
    }

    const response = await fetch(`${process.env.API_URL}/posts`);
    const posts = await response.json();

    return { posts }
}

export default Posts;