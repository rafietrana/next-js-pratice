import getDynamicPostById from "@/app/lib/getDynamicPostById";
import getPostComment from "@/app/lib/getPostComment";
import React from "react";

// export async  function generateMetadata({params}){
//           const {id} = params;
//           const post = await getDynamicPostById();
//           return {
//                 title: post.title,
//                 description:   post.body
//           }
// }

const postPage = async ({ params }) => {
  const { id } = await params;

  console.log("alhamdulillah dynamic id is", id);

  const postPromice = getDynamicPostById(id);
  const commentPromice = getPostComment(id);

  const   [post, comments] = await Promise.all([postPromice, commentPromice]);

 
 console.log('alhamdulillah comment is', comments);
 


  return (
    <div>
 
   <p>{post.title} </p>
   

   {
    comments.map(comment=><p>{comment.name}</p>)
   }
   
 

       
    </div>
  );
};

export default postPage;
