import React, {useEffect, useState} from 'react';

const NewCollections:React.FC = () => {
    const [hotCollections, sethotCollections] = useState<any[]>([])
    useEffect(() => {
        fetch('https://captons.herokuapp.com/api/collections?num=3&date=day')
            .then(data => data.json())
            .then(data => sethotCollections(data.data.mainPageTopCollection.items))
    },[])
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