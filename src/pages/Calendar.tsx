import { Button, Layout, Modal, Row } from "antd";
import CalendarComponent from "../components/CalendarComponent";
import { useEffect, useState } from "react";
import EventForm from "../components/EventForm";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { CalendarInterface } from "../models/CalendarInterface";

const Calendar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { fetchGuests, createEvent, fetchEvents } = useActions();
  const { guests, events } = useTypedSelector((state) => state.event);
  const { user } = useTypedSelector((state) => state.auth);

  useEffect(() => {
    fetchGuests();
    fetchEvents(user.username);
  }, []);

  const addNewEvent = (event: CalendarInterface) => {
    setModalOpen(false);
    createEvent(event);
  };

  return (
    <Layout>
      <CalendarComponent events={events} />
      <Row justify="center">
        <Button onClick={() => setModalOpen(true)}>Add event</Button>
      </Row>
      <Modal
        title="Add event"
        open={modalOpen}
        footer={null}
        onCancel={() => setModalOpen(false)}
      >
        <EventForm guests={guests} submit={addNewEvent} />
      </Modal>
    </Layout>
  );
};

export default Calendar;
