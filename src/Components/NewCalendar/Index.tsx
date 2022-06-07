import moment from 'moment';
import React, { useState } from 'react';
import DatePicker from 'react-datetime';



const NewCalendar = () => {
const [startDate, setStartDate]=useState();

    const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate() + 1).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };

    const disableFutureDate=()=>{
        const today = new Date();
        const dd = String(today.getDate() + 1).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    }

    // const disablePastDateO = () => {
    //     const appDate = moment(startDate, "YYYY-MM-DD").format("YYYY-MM-DD");  
    //     return appDate;
    // };

    ///disable future dates
    const today = moment();
    const disableFutureDt = (current: any) => {
        return current.isBefore(today)
    }

    // disable past dates
    const yesterday = moment().subtract(1, 'day');
    const disablePastDt = (current: any) => {
        return current.isAfter(yesterday);
    };



    return (
        <div>
            <h3 style={{color:"red"}}>Start date not Less Than End date</h3>
            <div className="card" style={{ display: "flex", margin: "30px" }}>
            <input type="date" name="date" max={disableFutureDate()} style={{ marginRight: "50px" }}/>
                <input type="date" name="date" min={disablePastDate()} style={{ marginRight: "50px" }} />
               
            </div>

            <div className="card" style={{ display: "flex", margin: "30px" }}>
                <div style={{marginRight:"100px"}}>
                <p className="title">Disable Past dates:</p>
                    <DatePicker
                        timeFormat={false}
                        isValidDate={disablePastDt}
                    />
                </div>
                <div>
                    <p className="title">Disable future dates:</p>
                    <DatePicker
                        timeFormat={false}
                        isValidDate={disableFutureDt}
                    />
                </div>

            </div>
            <div>
            <div className="card" style={{ display: "flex", margin: "30px" }}>
            <input type="date" name="date" max={disableFutureDate()} style={{ marginRight: "50px" }}/>
                <input type="date" name="date" min={disablePastDate()} style={{ marginRight: "50px" }} />
               
            </div>

            </div>
        </div>
    );
};

export default NewCalendar;