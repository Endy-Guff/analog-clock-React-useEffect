import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {ClockHand} from "./components/ClockHand";

export type ClockHandsType = 'SECOND_TYPE' | 'MINUTE_TYPE' | 'HOUR_TYPE'

export const SECOND_TYPE = 'SECOND_TYPE'
export const MINUTE_TYPE = 'MINUTE_TYPE'
export const HOUR_TYPE = 'HOUR_TYPE'

function App() {

    let[date, setDate] = useState(new Date())

    useEffect(()=>{
        setInterval(()=>{
            setDate(new Date())
        }, 1000)
    }, [])
    return (
        <div className="App">
            <div className='clock'>
                <ClockHand type={HOUR_TYPE} time={date.getHours()}/>
                <ClockHand type={MINUTE_TYPE} time={date.getMinutes()}/>
                <ClockHand type={SECOND_TYPE} time={date.getSeconds()}/>
            </div>
        </div>
    );
}

export default App;
