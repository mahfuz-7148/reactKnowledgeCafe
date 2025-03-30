import React from 'react';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div className='bg-slate-200 px-4 mb-4 rounded-xl'>
            <h3 className='text-2xl'>{title}</h3>
        </div>
    );
};

export default Bookmark;