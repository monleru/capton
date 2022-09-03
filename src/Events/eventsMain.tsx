import React,{useState} from 'react';
import './style.css'
import Filter from "./filter";
import Collections from "./collections";
import Cards from "./cards";

const EventsMain:React.FC = () => {
    return (
        <div>
            <div className="events_header">
                <div>
                    <p>Today's Activites on <span>The Open Network</span></p>
                </div>
                <div>
                    <button>Events</button>
                    <button>Drops</button>
                    <button>Sales</button>
                </div>
            </div>
            <Filter />
            <Collections />
        </div>
    );
};

export default EventsMain;