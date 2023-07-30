import React, { useState, useEffect } from "react";
import CountDown from "./countDown";
import style from "./dateSelector.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Congrats from "./congrats";

const DateSelector = () => {
    const [date, setDate] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const [running, setRunning] = useState(false);

    const [timer, setTimer] = useState(1);
    const [startDate, setStartDate] = useState(
        new Date().toISOString().split("T")[0]
    );

    const getTime = () => {
        if (running) {
            console.log(date);
            if (!isNaN(Date.parse(date))) {
                const time = Date.parse(date) - Date.now();
                console.log("time:", time);
                console.log("timer:", timer);

                if (time <= 0) {
                    setRunning(false);
                    setTimer(0);
                } else {
                    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
                    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
                    setMinutes(Math.floor((time / 1000 / 60) % 60));
                    setSeconds(Math.floor((time / 1000) % 60));
                }
            }
        }
    };

    useEffect(() => {
        if (running) {
            const interval = setInterval(getTime, 1000);

            return () => clearInterval(interval);
        }
    }, [date, running]);

    const handleInputChange = (event) => {
        const selectedDate = event.target.value;
        const currentDate = new Date().toISOString().split("T")[0];

        if (selectedDate < currentDate) {
            alert(
                `You can't choose a day that already past, choose any day after ${currentDate}`
            );
        } else if (selectedDate === currentDate) {
            alert(`That's today, choose any day after ${currentDate}`);
        } else {
            setDate(selectedDate);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(date);
        getTime();
        setRunning(true);
        setSubmitted(true);
    };

    const handleNewDate = (event) => {
        event.preventDefault();
        setSubmitted(false);
        setTimer(1);
        setRunning(false);
    };

    const specialDate = date.split("T");
    const specialDateDay = specialDate[0].split("-").reverse().join("-");
    const specialDateHour = specialDate[1];
    console.log(specialDate);
    console.log(specialDate);

    return (
        <div className={style.container}>
            <div className={style.dateSelector}>
                {submitted && timer <= 0 ? (
                    <div className={style.calendarCont}>
                        <Congrats />
                        <button
                            type="submit"
                            onClick={handleNewDate}
                            className={style.dateButton}
                        >
                            Select New Date
                        </button>
                    </div>
                ) : !running ? (
                    <div className={style.calendarCont}>
                        <h1 className={style.title1}>
                            Countdown Timer
                        </h1>

                        <form onSubmit={handleSubmit} className={style.form}>
                            <input
                                placeholder="dd/mm/yyyy"
                                type="datetime-local"
                                name="date"
                                value={date}
                                required
                                onChange={handleInputChange}
                                className={style.dateInput}
                            />
                            <button type="submit" className={style.dateButton}>
                                Start
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className={style.calendarCont}>
                        <h1 className={style.title}>
                            Change date?
                        </h1>

                        <button
                            type="submit"
                            onClick={handleNewDate}
                            className={style.dateButton}
                        >
                            Select New Date
                        </button>
                        <h2 className={style.timeLeft}>
                            Time left to {specialDateDay} at {specialDateHour}
                        </h2>
                    </div>
                )}

                <CountDown
                    date={date}
                    days={days}
                    hours={hours}
                    minutes={minutes}
                    seconds={seconds}
                />
            </div>
        </div>
    );
};

export default DateSelector;
