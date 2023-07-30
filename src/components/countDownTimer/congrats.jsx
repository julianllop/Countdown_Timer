import React from "react";
import style from "./dateSelector.module.css"

const Congrats = () => {
    return (
        <div className={style.calendarCont}>
            <h1 className={style.title}>The day has come !</h1>
            <div className={style.congrats}>
                <h1>{"🎉"}</h1>
                <h1>{"🎉"}</h1>
                <h1>{"🎉"}</h1>
                <h1>{"🎉"}</h1>
                <h1>{"🎉"}</h1>
            </div>
        </div>
    );
};

export default Congrats;
