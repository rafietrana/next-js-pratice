import React from 'react';

const Comments = async ({promise}) => {

    const comments = await promise;
    
    return (
        <div>
            <hr />
            <p>alhamdulillah this is comment </p>
            
               {
    comments.map((comment, idx)=>(
        <p key={idx}>{comment.name}</p> )
)
   }
        </div>
    );
};

export default Comments;