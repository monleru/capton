import React, {useEffect, useState} from 'react';
import Pages from "./pages";


const Collections:React.FC<any> = ({date}) => {
    console.log(date)
    const [collections, setCollection] = useState<any[]>([])
    useEffect(() => {
       fetch(`https://captons.herokuapp.com/api/collections?num=10&date=${date}`)
           .then(data => data.json())
           .then(data => setCollection(data.data.mainPageTopCollection.items))
    },[date])
    console.log(collections)
    return (
        <div className="main_page_collections_div">
            <div style={{'borderTop': 'none'}}>
                <p style={{marginLeft: '5px', minWidth: '30px'}}>#</p>
                <p style={{minWidth: '200px', 'justifyContent': 'start'}}>Name</p>
                <p>Floor Price <span className="help">?</span></p>
                <p>Floor Change</p>
                <p>Sales</p>
                <p>Top Sale <span className="help">?</span></p>
                <p>Volume <span className="help">?</span></p>
                <p>Market Cap <span className="help">?</span></p>
            </div>
            {collections.map(post =>
                <div>
                    <p style={{marginLeft: '5px', minWidth: '30px'}}>{post.place}</p>
                    <p style={{minWidth: '200px', 'justifyContent': 'start'}}>
                        <img className="main_page_collection_img" src={post.collection.image.image.sized} alt=""/>
                        {post.collection.name.substr(0,10) + (post.collection.name.length > 10 ? '...' : '')}
                    </p>
                    <p>{post.floorPrice.toFixed(2)}</p>
                    <p style={
                        post.diffPercent > 0 ? {color: "green"} :
                            post.diffPercent < 0 ? {color: 'red'} :
                                {}
                    }>{post.diffPercent != null ? post.diffPercent.toFixed(2) : 0}%</p>
                    <p>{post.sales}</p>
                    <p>{post.top_sale}</p>
                    <p>{post.currencyValue.toFixed(2)}</p>
                    <p>{(post.collection.approximateItemsCount * post.floorPrice).toFixed(0)}</p>
                </div>
            )}
            <Pages />
        </div>
    );
};

export default Collections;