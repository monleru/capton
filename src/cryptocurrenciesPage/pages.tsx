import React, {useState,useEffect} from 'react';

const Pages:React.FC<any> = ({page_,setPage_}) => {
    let p = Array.from({ length: Math.ceil(page_/10) }, (v, i) =>  i + 1)
    const [pages, setPages] = useState({
        pages: p,
        current: 1})
    useEffect(() => {setPages({
        pages: p,
        current: 1
    })},[page_])
    let page_fit = [
        (pages.current - 1) < 1 ? null : pages.current - 1,pages.current,
        (pages.current) >= (pages.pages.length) ? null :  pages.current + 1,
        pages.current == pages.pages.length || pages.current == pages.pages.length -1 ? null : '...',
        pages.current >= pages.pages.length - 1 ? null : pages.pages.length]
    const onChangePages = (post:any) => {
        setPage_(post)    
        setPages({
            pages: pages.pages,
            current: post
        })
    }
    const plusPage = () =>{
        if (pages.current >= pages.pages.length) { return }
        setPage_(pages.current + 1)
        setPages({
            pages: pages.pages,
            current: pages.current + 1
        })
    }
    const minusPage = () =>{
        if (pages.current <= 1) { return }
        setPage_(pages.current - 1)
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
            {page_fit.map( post=>
                post == null ? '' : post == '...' ? <button className='page_num'>...</button> :
                <button
                    key={Math.random()} 
                    onClick={() => onChangePages(post)}
                    className={"page_num " + (post == pages.current ? "page_num_active" : '')}>{post}
                </button>
            )}
            <div >
                <button
                    onClick={() => plusPage()}
                    className="triangle-right"></button>
            </div>
            <p className="page_results">10 Results out of {page_}</p>
        </div>
    );
};

export default Pages;