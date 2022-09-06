import React, {useState} from 'react';
import Pages from "./pages";

const Collections:React.FC = () => {
    const [collections, setCollection] = useState([
        {name: "123", floor_price: "230", floor_change: '3.23%', sales: "3,954", top_sale: '230', volume: "45,850", market_cap: "1,345,900,200"},
        {name: "123", floor_price: "230", floor_change: '3.23%', sales: "3,954", top_sale: '230', volume: "45,850", market_cap: "1,345,900,200"},
        {name: "123", floor_price: "230", floor_change: '3.23%', sales: "3,954", top_sale: '230', volume: "45,850", market_cap: "1,345,900,200"},
        {name: "123", floor_price: "230", floor_change: '3.23%', sales: "3,954", top_sale: '230', volume: "45,850", market_cap: "1,345,900,200"},
        {name: "123", floor_price: "230", floor_change: '3.23%', sales: "3,954", top_sale: '230', volume: "45,850", market_cap: "1,345,900,200"},
        {name: "123", floor_price: "230", floor_change: '3.23%', sales: "3,954", top_sale: '230', volume: "45,850", market_cap: "1,345,900,200"},
        {name: "123", floor_price: "230", floor_change: '3.23%', sales: "3,954", top_sale: '230', volume: "45,850", market_cap: "1,345,900,200"},
        {name: "123", floor_price: "230", floor_change: '3.23%', sales: "3,954", top_sale: '230', volume: "45,850", market_cap: "1,345,900,200"},
        {name: "123", floor_price: "230", floor_change: '3.23%', sales: "3,954", top_sale: '230', volume: "45,850", market_cap: "1,345,900,200"},
        {name: "123", floor_price: "230", floor_change: '3.23%', sales: "3,954", top_sale: '230', volume: "45,850", market_cap: "1,345,900,200"},
    ])
    return (
        <div className="main_page_collections_div">
            <div style={{'borderTop': 'none'}}>
                <p style={{'width': '30px'}}>#</p>
                <p style={{'width': '20%', 'justifyContent': 'start'}}>Name</p>
                <p>Floor Price <span className="help">?</span></p>
                <p>Floor Change</p>
                <p>Sales</p>
                <p>Top Sale <span className="help">?</span></p>
                <p>Volume <span className="help">?</span></p>
                <p>Market Cap <span className="help">?</span></p>
            </div>
            {collections.map(post =>
                <div>
                    <p style={{'width': '30px'}}>#</p>
                    <p style={{'width': '20%', 'justifyContent': 'start'}}>
                        <img className="main_page_collection_img" src="" alt=""/>
                        {post.name}
                    </p>
                    <p>{post.floor_price}</p>
                    <p>{post.floor_change}</p>
                    <p>{post.sales}</p>
                    <p>{post.top_sale}</p>
                    <p>{post.volume}</p>
                    <p>{post.market_cap}</p>
                </div>
            )}
            <Pages />
        </div>
    );
};

export default Collections;