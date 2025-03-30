import React from 'react';
import Bookmark from "./Bookmark.jsx";

const Bookmarks = ({bookmarks, readingTime }) => {
    return (
        <div className='w-1/3 bg-amber-200 ml-4 mt-2 pt-4'>
          <div>
              <h3>Reading Time: {readingTime}</h3>
          </div>
            <h2>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, indx) => (
                    <Bookmark key={indx} bookmark={bookmark} />
                ))
            }
        </div>
    );
};

export default Bookmarks;