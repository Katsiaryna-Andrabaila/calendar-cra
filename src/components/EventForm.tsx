import { Button, DatePicker, Form, Input, Row, Select } from "antd";
import { rules } from "../utils/rules";
import { UserInterface } from "../models/User";
import { useState } from "react";
import { CalendarInterface } from "../models/CalendarInterface";
import { Dayjs } from "dayjs";
import { formatDate } from "../utils/date";
import { useTypedSelector } from "../hooks/useTypedSelector";

interface EventFormProps {
  guests: UserInterface[];
  submit: (event: CalendarInterface) => void;
}

const EventForm = ({ guests, submit }: EventFormProps) => {
  const [event, setEvent] = useState<CalendarInterface>({
    author: "",
    date: "",
    description: "",
    guest: "",
  });

  const { user } = useTypedSelector((state) => state.auth);

  const selectDate = (date: Dayjs | null) => {
    if (date) {
      setEvent({ ...event, date: formatDate(date.toDate()) });
    } else {
      console.log("Select date");
    }
  };

  const submitForm = () => {
    submit({ ...event, author: user.username });
  };

  return (
    <Form onFinish={submitForm}>
      <Form.Item
        label="Event description"
        name="description"
        rules={[rules.required()]}
      >
        <Input
          value={event.description}
          onChange={(e) => setEvent({ ...event, description: e.target.value })}
        />
      </Form.Item>
      <Form.Item label="Event date" name="date" rules={[rules.required()]}>
        <DatePicker onChange={(date) => selectDate(date)} />
      </Form.Item>
      <Form.Item label="Event guest" name="guest" rules={[rules.required()]}>
        <Select onChange={(guest) => setEvent({ ...event, guest })}>
          {guests.map((el) => (
            <Select.Option value={el.username} key={el.username}>
              {el.username}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item>
        <Row justify="end">
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default EventForm;
