"use client";
import { useEffect, useState } from "react";

export default function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-4 text-center text-xl mt-4">
      <div className="bg-white shadow-xl px-3 py-3 rounded">
        <p>{timeLeft.days}</p>
        <span>Days</span>
      </div>
      <div className="bg-white shadow-xl px-3 py-3 rounded">
        <p>{timeLeft.hours}</p>
        <span>Hours</span>
      </div>
      <div className="bg-white shadow-xl px-3 py-3 rounded">
        <p>{timeLeft.minutes}</p>
        <span>Minutes</span>
      </div>
      <div className="bg-white shadow-xl px-3 py-3 rounded">
        <p>{timeLeft.seconds}</p>
        <span>Seconds</span>
      </div>
    </div>
  );
}
