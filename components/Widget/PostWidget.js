import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import { getRecentPosts, getSimilarPosts } from "../../queries";

const PostWidget = ({ categories, slug }) => {
  const [postWidget, setPostWidget] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => setPostWidget(result));
    } else {
      getRecentPosts().then((result) => setPostWidget(result));
    }
  }, [slug]);
  console.log(postWidget);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {postWidget.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <img alt={post.title} src={post.featuredImage.url} className="align-middle widget-image"/>
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 text-xs">
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <Link href={`/post/${post.slug}`} key={post.title}className="text-md">
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
