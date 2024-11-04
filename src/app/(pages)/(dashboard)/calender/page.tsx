/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React from "react";
import { Calendar } from "@/components/ui/calendar";

const Calenderpage = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="flex items-center justify-center ml-[30vw]">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </div>
  );
};

export default Calenderpage;
