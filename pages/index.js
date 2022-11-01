import Link from "next/link";
import { PostCard } from "../components";
import { getPosts } from "../queries/posts";

export default function Home({posts}) {
  return (
    <div>
      <div className="min-h-screen py-44 bg-blue-100">
        <div className="container lg:px-32 px-6">
          <h2 className="text-4xl font-bold mb-2 text-black">
           
          </h2>
          <h3 className="text-2xl mb-8 text-black-200">
          <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
          </h3>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(){
  const posts= (await getPosts())||[];
    return { 
     props: {posts}
     }
}