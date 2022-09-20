import React, {useEffect, useState} from 'react';
import ContentLoader from 'react-content-loader'

const MyLoader = () => (
    <ContentLoader viewBox="0 0 100000 100000"
                   preserveAspectRatio="none"
                   width='100%'
                   height='30px'
                   backgroundColor="#3a3a3a"
                   foregroundColor="#555151"
                   speed={4}>
        <rect x="80" y="40" rx="3" ry="3" width="100%" height="100%" />
    </ContentLoader>
)

const NewCollections:React.FC = () => {
    const [hotCollections, sethotCollections] = useState<any[]>([])
    useEffect(() => {
        fetch('https://captons.herokuapp.com/api/collections?num=3&date=day')
            .then(data => data.json())
            .then(data => sethotCollections(data.data.mainPageTopCollection.items))
    },[])
    if (hotCollections.length == 0) {
        return (
            <div className="loader_div_colletions_hot">
                <MyLoader />
                <MyLoader />
                <MyLoader />
            </div>
        )
    }
    return (
        <div>
            {hotCollections.map(post=>
                <div className="collections_grid">
                    <div className="collection_name_div">
                        <p>{post.place}.</p>
                        <img className="collection_name_logo" src={post.collection.image.image.sized} alt=""/>
                        <p>{post.collection.name.substr(0,10) + (post.collection.name.length > 10 ? '...' : '')}</p>
                    </div>
                    <p>{post.collection.approximateItemsCount}</p>
                    <p style={{'color': '#FFFFFF'}}>${post.currencyValue.toFixed(2)}</p>
                </div>
            )}
        </div>
    );
};

export default NewCollections;