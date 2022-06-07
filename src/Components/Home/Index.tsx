import React from 'react';
import FirstCalendar from '../FirstCalendar/Index';
import NewCalendar from '../NewCalendar/Index';

const Home = () => {
    return (    
        <div>
            <NewCalendar/>
            <FirstCalendar/>
        </div>
    );
};

export default Home;