import React, {useEffect, useState} from 'react';
import Pages from "./pages";
import ContentLoader from "react-content-loader";
import CollectionHeader from "./components/collectionHeader";
const MyLoader = () => (
    <ContentLoader viewBox="0 0 100000 100000"
                   preserveAspectRatio="none"
                   width='100%'
                   height='50px'
                   backgroundColor="#3a3a3a"
                   foregroundColor="#555151"
                   speed={4}>
        <rect x="80" y="40" rx="3" ry="3" width="100%" height="100%" />
    </ContentLoader>
)

const Collections:React.FC<any> = ({date}) => {
    console.log(date)
    const [collections, setCollection] = useState<any[]>([])
    useEffect(() => {
       fetch(`https://captons.herokuapp.com/api/collections?num=100&date=${date}`)
           .then(data => data.json())
           .then(data => setCollection(data.data.mainPageTopCollection.items))
    },[date])
    console.log(collections)
    if (collections.length == 0 ) {
        let num = [1,2,3,4,5,6,7,8,9,0]
        return (
            <div className="main_page_collections_div">
                <CollectionHeader />
                {num.map(post =>
                    <div key={Math.random()} style={{width: '100%', height: '50px'}}>
                        <MyLoader />
                    </div>
                )}
                <Pages />
            </div>
        )
    }
    return (
        <div className="main_page_collections_div">
            <CollectionHeader />
            {collections.map(post =>
                <div key={Math.random()} >
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
            <Pages page_={collections.length}/>
        </div>
    );
};

export default Collections;