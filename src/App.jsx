
import Header from "./components/Header.jsx";
import Blogs from "./components/Blogs.jsx";
import {useState} from "react";
import Bookmarks from "./components/Bookmarks.jsx";


const App = () => {
    const [bookmarks, setBookmarks] = useState([])
    const [readingTime, setReadingTime] = useState(0)

    const addToBookmarks = blog => {
        const newBookmarks = [...bookmarks, blog]
        setBookmarks(newBookmarks)
    }

    const markAsRead = (id, time) => {
        const newReadingTime = readingTime + time
        setReadingTime(newReadingTime)
        const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
        setBookmarks(remainingBookmarks)
    }
    return (
        <div>
            <Header />
            <div className='flex max-w-7xl mx-auto'>
                <Blogs addToBookmarks={addToBookmarks} markAsRead={markAsRead}/>
                <Bookmarks bookmarks={bookmarks} readingTime={readingTime}/>
            </div>
        </div>
    );
};

export default App;