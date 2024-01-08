import { useEffect, useState } from "react";
import { DateStyles, DateDay, DateTime } from "./DateComp.styled";

export default function DateComp() {
  const date = new Date();

  let seconds = date.getSeconds().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let hours = date.getHours().toString().padStart(2, "0");
  const [counter, setCountere] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountere((counter) => counter + 1);
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [counter]);

  return (
    <DateStyles>
      <DateDay>{`${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}`}</DateDay>
      <DateTime>{`${hours}:${minutes}:${seconds}`}</DateTime>
    </DateStyles>
  );
}
