
import Header from "./components/Header.jsx";
import Blogs from "./components/Blogs.jsx";
import {useState} from "react";


const App = () => {
    const [bookmarks, setBookmarks] = useState([])

    const addToBookmarks = blog => {
        const newBookmarks = [...bookmarks, blog]
        setBookmarks(newBookmarks)
    }
    return (
        <div>
            <Header />
            <div className='flex max-w-7xl mx-auto'>
                <Blogs addToBookmarks={addToBookmarks}/>
            </div>
        </div>
    );
};

export default App;