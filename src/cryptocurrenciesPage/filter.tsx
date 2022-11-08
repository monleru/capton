import React,{useState} from 'react';
interface filter{
    buttons: string[],
    current: string
}
const Filter:React.FC<any> = ({ChangeDate}) => {
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
    const onChangeDate = (value:string) => {
        ChangeDate(value)
    }
    return (
        <div className="main_page_filters">
            <div>
                <select name="" id="">
                    <option value="">Collections</option>
                </select>
                <span>|</span>
                <p></p>
                {filter.buttons.map(post =>
                    <button key={Math.random()} 
                        className={post == filter.current ? "filter_button_active" : ''}
                        onClick={() => onChangeFilter(post)}
                    >{post}</button>
                )}
            </div>
            <div>
                <select onChange={(e) => onChangeDate(e.target.value)} name="" id="">
                    <option value="day">24H</option>
                    <option value="week">7D</option>
                    <option value="month">30D</option>
                    <option value="all">All</option>
                </select>
                <button className="filter_button_active">Filters</button>
            </div>
        </div>
    );
};

export default Filter;