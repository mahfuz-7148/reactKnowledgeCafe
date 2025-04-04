import 'remixicon/fonts/remixicon.css'

const Blog = ({blog, addToBookmarks, markAsRead}) => {
    const {id, title, cover, author, author_img, posted_date, reading_time, hashtags} = blog
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt="" />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => addToBookmarks(blog)} className='ml-2 text-2xl text-red-600'><i className="ri-bookmark-fill cursor-pointer"></i></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, indx) => (
                        <span key={indx}>
                            <a href="">#{hash}</a>
                        </span>
                    ))
                }
            </p>
            <button onClick={()=> markAsRead(id, reading_time)} className='text-purple-900 font-bold underline cursor-pointer'>Mark As Read</button>
        </div>
    );
};

export default Blog;