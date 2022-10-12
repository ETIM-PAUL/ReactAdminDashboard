import React, { memo } from 'react'
import { kanbanGrid, kanbanData } from "../../assets/FakeData"
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban'
import { Header } from '../../components/Header'

const TasksManager = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl" >
      <Header title="Tasks Manager" />
      <KanbanComponent id="kanban" dataSource={kanbanData} cardSettings={{ contentField: 'Summary', headerField: 'Id' }} keyField="Status">
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  )
}

const TasksManagerMemo = memo(TasksManager)
export { TasksManagerMemo as TasksManager }