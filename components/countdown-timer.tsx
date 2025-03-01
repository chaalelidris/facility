"use client";

import { useState, useEffect } from "react";
import { Clock } from "iconsax-react";

export function CountdownTimer({ endTime }: { endTime: string }) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    console.log(endTime);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const end = new Date(endTime).getTime();
      const distance = end - now;

      const hours = Math.floor(distance / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(
        `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2">
      <Clock className="size-6 fill-destructive " variant="Bulk" />
      <span className="text-destructive">
        ENDS IN: <span className="font-semibold">{timeLeft}</span>
      </span>
    </div>
  );
}
