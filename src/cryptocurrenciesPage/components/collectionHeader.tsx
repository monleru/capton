import React from 'react';

const CollectionHeader = () => {
    return (
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
    );
};

export default CollectionHeader;