import { MONTHS } from "@/constant/constants";
import { useState } from "react";

interface IMonthSelectprops {
  onSelect: (select: number) => void;
}

export default function MonthSelect(props: IMonthSelectprops) {
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(parseInt(event.target.value));
    props.onSelect(parseInt(event.target.value));
  };

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="month" className="text-black/40 ml-1">
        Month
      </label>
      <div className="border border-black/10 rounded-lg px-4 py-2 bg-white">
        <select
          id="month"
          className=" h-10 text-black/90  outline-none "
          value={selectedMonth || ""}
          onChange={handleMonthChange}
        >
          <option value="" />
          {MONTHS.map((month) => (
            <option key={month.value} value={month.value}>
              {month.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
