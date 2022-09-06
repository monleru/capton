import React, {useState} from 'react';

const Pages:React.FC = () => {
    const [pages, setPages] = useState({
        pages: [1,2,3,4,5,6,7],
        current: 1})
    const onChangePages = (post:any) => {
        setPages({
            pages: pages.pages,
            current: post
        })
    }
    const plusPage = () =>{
        if (pages.current >= pages.pages.length) { return }
        setPages({
            pages: pages.pages,
            current: pages.current + 1
        })
    }
    const minusPage = () =>{
        if (pages.current <= 1) { return }
        setPages({
            pages: pages.pages,
            current: pages.current - 1
        })
    }
    return (
        <div className="main_page_pages_div">
            <div >
                <button
                    onClick={() => minusPage()}
                    className="triangle-left"></button>
            </div>
            {pages.pages.map( post=>
                <button
                    onClick={() => onChangePages(post)}
                    className={"page_num " + (post == pages.current ? "page_num_active" : '')}>{post}
                </button>
            )}
            <div >
                <button
                    onClick={() => plusPage()}
                    className="triangle-right"></button>
            </div>
            <p className="page_results">10 Results out of 338</p>
        </div>
    );
};

export default Pages;