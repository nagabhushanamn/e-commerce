import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Item from './Item';

const ItemList = (props) => {

    let [items, setItems] = useState([]);

    const getItems = async () => {
        let response = await axios.get("http://localhost:3000/items")
        let items = response.data;
        setItems(items);
    };

    useEffect(() => {
        getItems();
    }, [])

    const renderItems = () => {
        return items.map((item, idx) => {
            return (
                <div key={idx}>
                    <Item value={item} />
                </div>
            )
        })
    }
    return (
        <div>
            {renderItems()}
        </div>
    );
};

export default ItemList;