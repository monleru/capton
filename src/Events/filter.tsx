import React, {useState} from 'react';

const Filter = () => {
    const [filter, setFilter] = useState({
        buttons: ['All', 'Social Networks', 'Quests', 'Creative', 'Content'],
        current: 'All'
    })
    function onChangeFilter (props:string){
        let filter_ = {
            buttons: filter.buttons,
            current: props
        }
        setFilter(filter_)
    }
    return (
        <div>
            <select name="" id="">
                <option value="">Active</option>
            </select>
            <span>|</span>
            {filter.buttons.map(post =>
                <button
                    onClick={() => onChangeFilter(post)}
                    className={"filter_button" + (post === filter.current ? ' filter_button_active' : '')}>
                    {post}
                </button>
            )}
        </div>
    );
};

export default Filter;