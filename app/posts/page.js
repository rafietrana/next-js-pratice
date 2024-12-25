import React from "react";
import getAllPost from "@/app/lib/getAllPost.js";
import Link from "next/link";

const posts = async () => {
  const post = await getAllPost();
  console.log(post);

  return (
    <div>
      <p>this is posts page</p>
      <ul>
        <div className="flex flex-col">{post.map(posti=><Link className="text-red-500" href={`/posts/${posti.id}`} key={posti.id}>{posti.title}</Link>)}</div>
      </ul>
    </div>
  );
};

export default posts;
