import React,{useState} from 'react';
interface filter{
    buttons: string[],
    current: string
}
const Filter:React.FC = () => {
    const [filter, setFilter] = useState<filter>({
        buttons: ["All", "Art", "Collectibles", "Utility", "Metaverse"],
        current: "All"
    })
    const onChangeFilter = (filter_:string) => {
        setFilter({
            buttons: filter.buttons,
            current: filter_
                  })
    }
    return (
        <div className="main_page_filters">
            <div>
                <select name="" id="">
                    <option value="">Collections</option>
                </select>
                <span>|</span>
                {filter.buttons.map(post =>
                    <button
                        className={post == filter.current ? "filter_button_active" : ''}
                        onClick={() => onChangeFilter(post)}
                    >{post}</button>
                )}
            </div>
            <div>
                <select name="" id="">
                    <option value="">24H</option>
                    <option value="">7D</option>
                    <option value="">30D</option>
                </select>
                <button className="filter_button_active">Filters</button>
            </div>
        </div>
    );
};

export default Filter;