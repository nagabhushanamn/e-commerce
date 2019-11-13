import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Review from './Review';

const Item = ({ value: item }) => {
    const [currentTab, setCurrentTab] = useState(1);
    const [reviews, setReviews] = useState([]);

    const getReviews = async (itemId) => {
        let response = await axios.get(`http://localhost:3000/items/${itemId}/reviews`)
        let reviews = response.data;
        setReviews(reviews);
    }

    useEffect(() => {
        if (currentTab === 3) {
            getReviews(item._id);
        }
    }, [currentTab])


    const renderReviews = () => {
        return reviews.map((review, idx) => {
            return (
                <div key={idx}>
                    <Review value={review} />
                </div>
            )
        })
    }
    const renderTabPanel = () => {
        switch (currentTab) {
            case 1: return (<div>{item.description}</div>)
            case 2: return (<div>{"ingre.."}</div>)
            case 3: return (<div>{renderReviews()}</div>)
            default: return null;
        }
    }
    return (
        <div className="list-group-item">
            <div className="row">
                <div className="col-3 col-sm-3 col-md-3">
                    <img alt="" src="" />
                </div>
                <div className="col-9 col-sm-9 col-md-9">
                    <h5>{item.name}</h5>
                    <h6>{item.currency} - {item.price}</h6>
                    <button className="btn btn-sm btn-dark">buy</button>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a onClick={e => { e.preventDefault(); setCurrentTab(1) }} className="nav-link" href="/">Description</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={e => { e.preventDefault(); setCurrentTab(2) }} className="nav-link" href="/">Ingre..</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={e => { e.preventDefault(); setCurrentTab(3) }} className="nav-link" href="/">Reviews</a>
                        </li>
                    </ul>
                    {renderTabPanel()}
                </div>
            </div>
        </div>
    );
};

export default Item;