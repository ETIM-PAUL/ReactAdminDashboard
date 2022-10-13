import React, { memo } from 'react'
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { Header } from '../../components/Header'
import { scheduleData } from "../../assets/FakeData"

const Appointments = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-main-dark-bg rounded-3xl" >
      <Header title="Appointments" />
      <ScheduleComponent height="410px" eventSettings={{ dataSource: scheduleData }} selectedDate={new Date(2022, 0, 10)}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </div>
  )
}

const AppointmentsMemo = memo(Appointments)
export { AppointmentsMemo as Appointments }