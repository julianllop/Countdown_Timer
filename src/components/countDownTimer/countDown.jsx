import React from "react";
import style from "./countDown.module.css"

const CountDown = ({ days, hours, minutes, seconds }) => {
    return (
        <div className={style.timer} role="timer">
            <div className={style.col4}>
                <div className={style.box}  >
                    <p id="day">
                        {days ? (days < 10 ? "0" + days : days) : "00"}
                    </p>
                    <span className={style.text}>Days</span>
                </div>
            </div>
            <div className={style.col4}>
                <div className={style.box}>
                    <p id="hour">
                        {hours ? (hours < 10 ? "0" + hours : hours) : "00"}
                    </p>
                    <span className={style.text}>Hours</span>
                </div>
            </div>
            <div className={style.col4}>
                <div className={style.box}>
                    <p id="minute">
                        {minutes
                            ? minutes < 10
                                ? "0" + minutes
                                : minutes
                            : "00"}
                    </p>
                    <span className={style.text}>Minutes</span>
                </div>
            </div>
            <div className={style.col4}>
                <div className={style.box}>
                    <p id="second">
                        {seconds
                            ? seconds < 10
                                ? "0" + seconds
                                : seconds
                            : "00"}
                    </p>
                    <span className={style.text}>Seconds</span>
                </div>
            </div>
        </div>
    );
};

export default CountDown;
