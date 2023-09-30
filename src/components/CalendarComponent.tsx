import { Calendar } from "antd";
import { CalendarInterface } from "../models/CalendarInterface";
import { Dayjs } from "dayjs";
import { formatDate } from "../utils/date";

interface CalendarComponentProps {
  events: CalendarInterface[];
}

const CalendarComponent = ({ events }: CalendarComponentProps) => {
  const dateCellRender = (value: Dayjs) => {
    const formatedDate = formatDate(value.toDate());
    const currentDayEvent = events.filter((el) => el.date === formatedDate);

    return (
      <div>
        {currentDayEvent.map((el, i) => (
          <div key={i} style={{ color: "red" }}>
            {el.description}
          </div>
        ))}
      </div>
    );
  };

  return <Calendar cellRender={dateCellRender} />;
};

export default CalendarComponent;
