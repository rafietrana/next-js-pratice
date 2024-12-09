import React from 'react';

const page = ({params}) => {
    const {id} = params;



    if(id === '3'){
        notFound()
    }

    
    return (
        <div>
            <p>Alhamdulillah is is {id}</p>
        </div>
    );
};

export default page;