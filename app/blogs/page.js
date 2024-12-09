import Link from 'next/link';
import React from 'react';

const Page = () => {


    const blogsData = [
        {
            id: "1",
            Title: "Blogs 1",
            description: "Blogs 1 description"
        },
        {
            id: "2",
            Title: "Blogs 2",
            description: "Blogs 2 description"
        }
    ]
    return (
        <div>
            <p>This is Blog Page</p>
             {blogsData.map(data =><Link href={`/blogs/${data.id}`}>{data?.Title}</Link>)}
        </div>
    );
};

export default Page;