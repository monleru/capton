import React, {useCallback, useRef, useState} from 'react';
const loader = require('../../img/loader.gif')

const SearchMobile:React.FC<any> = ({searchbutton,setSearchbutton}) => {
    const [value, setValue] = useState('');
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
            {searchbutton === false ? ''
                :   <div className="search_mobile_div_input">
                        <svg style={{ width: '24px', height: '24px'}} fill="none">
                            <svg></svg>
                            <path d="M16.4153 16.4153L20 20M18.5455 11.2727C18.5455 15.2893 15.2894 18.5454 11.2728 18.5454C7.25612 18.5454 4 15.2893 4 11.2727C4 7.2561 7.25612 4 11.2728 4C15.2894 4 18.5455 7.2561 18.5455 11.2727Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        <input
                            onBlur={(e) => { setValue(''); setcollections([]) } }
                            value={value}
                            onChange={changeHadler}
                            type="text" placeholder="Search">
                        </input>
                        <button
                            onClick={() => setSearchbutton(false)}
                            className="search_mobile_div_exit">Cancel</button>
                    </div>
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

export default SearchMobile;