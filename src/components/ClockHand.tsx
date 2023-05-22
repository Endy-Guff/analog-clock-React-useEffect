import React from 'react';
import s from './ClockHand.module.css'
import {ClockHandsType, HOUR_TYPE, MINUTE_TYPE, SECOND_TYPE} from "../App";

type ClockHandPropsType = {
    type: ClockHandsType
    time: number
}

export const ClockHand: React.FC<ClockHandPropsType> = (
    {
        type,
        time
    }
) => {

    let className
    if (type === SECOND_TYPE) {
        className = s.wrapper + ' ' + s.second
    }
    if (type === MINUTE_TYPE){
        className = s.wrapper + ' ' + s.minute
    }
    if (type === HOUR_TYPE){
        className = s.wrapper + ' ' + s.hour
    }

    let style
    if (type === SECOND_TYPE || type === MINUTE_TYPE){
        style = 6
    }
    if (type === HOUR_TYPE){
        style = 30
    }

    return (
        <div className={className} style={{transform: `rotate(calc(${time}*${style}deg))`}}></div>
    );
};

