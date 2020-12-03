import Link from "next/link";
import { GetServerSideProps, InferGetServerSidePropsType, GetServerSidePropsContext } from 'next'
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { Loader, MainLayout } from "../../components";
import { POSTS } from "../../shared/routers";
import { PostType } from "../../types/post.type";

type PostProps = {
    post: PostType
};

const Post = ({ post: serverPost }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const router = useRouter();
    const [post, setPost] = useState(serverPost);

    useEffect(() => {
      const fetchData = async () => {
          const response = await fetch(`${process.env.API_URL}/posts/${router.query.id}`);
          const data = await response.json();
          setPost(data);
      }

      if(!serverPost) {
          fetchData();
      }
    }, [])

    return (
        <MainLayout title="Post" >
            { post
                ? (
                    <>
                        <h1>Post { post.id }</h1>
                        <hr/>
                        <p>{post.body}</p>
                        <Link href={POSTS} >Back to all posts</Link>
                    </>)
                : <Loader />
            }
        </MainLayout>
    )
}

// Post.getInitialProps = async ({ query, req }) => {
//     if(!req) {
//         return {
//             post: null
//         }
//     }
//     const response = await fetch(`${DB_URL}/posts/${query.id}`);
//     const post = await response.json();
//     return { post }
// }

interface IGetServerSideProps extends GetServerSidePropsContext {
    query: {
        id: string
    }
}

export const getServerSideProps: GetServerSideProps<PostProps> = async ({ query }: IGetServerSideProps) => {
    const response = await fetch(`${process.env.API_URL}/posts/${query.id}`);
    const post = await response.json();
    return { props: post }
};

export default Post;