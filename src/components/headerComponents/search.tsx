import React, {useCallback, useRef, useState} from 'react';
const loader = require('../../img/loader.gif')

const Search = () => {
    const [value, setValue] = useState('');
    const [searchbutton, setSearchbutton] = useState(false)
    const [collections, setcollections] = useState<any[]>([])
    const [collectionsLoader, setCollectionsLoader] = useState(false)


    const searchCollections = useDebounce(async(value:string) => {
        fetch(`http://captons.herokuapp.com/api/search?name=${value}`)
            .then(data => data.json())
            .then(data => {
                setcollections(data.data.collections.edges)
                if (data.data.collections.edges.length == 0) {
                    setcollections([null])
                }
                setCollectionsLoader(false)})
    }, 500)
    function useDebounce(callback:any, delay:any) {
        const timer = useRef<any>(null);

        const debounceCallback = useCallback((...args: any) => {
            if (timer.current) {
                clearTimeout(timer.current)
            }

            timer.current = setTimeout(() => {
                callback(...args)
            }, delay)
        }, [callback, delay])

        return debounceCallback
    }
    const changeHadler = useCallback(async(e:any) => {
        setValue(e.target.value)
        setCollectionsLoader(true)
        setcollections([])
        searchCollections(e.target.value)
    },[])
    return (
        <div>
            {searchbutton === false ? <button
                    onClick={() => {
                        setSearchbutton(true)
                    }}
                >Search</button>
                : <input
                    onBlur={(e) => { setValue(''); setcollections([]) } }
                    value={value}
                    onChange={changeHadler}
                    type="text" placeholder="Search"></input>
            }
            {searchbutton === false ? '' :
                <div className="search_collections_div">
                    {collectionsLoader ? <img className="loader_search" src={loader}/> : ""}
                    {
                    collections[0] === null ? 'No collections' :
                    collections.map(post =>
                        <div>
                            <img
                                src={post.node.previewImage != null ? post.node.previewImage.image.baseUrl : ''}
                                alt=""/>
                            <a href={`/collection/${post.node.name}`}>{post.node.name}</a>
                        </div>
                    )
                    }

                </div>
            }
        </div>
    );
};

export default Search;