import React, { memo } from 'react'
import { kanbanGrid, kanbanData } from "../../assets/FakeData"
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban'
import { Header } from '../../components/Header'

const TasksManager = () => {

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-main-dark-bg rounded-3xl" >
      <Header title="Tasks Manager" />
      <KanbanComponent id="kanban" dataSource={kanbanData} cardSettings={{ headerField: "Title", contentField: 'Summary' }} keyField="Status" enableTooltip={true} swimlaneSettings={{ keyField: "Assignee" }}>
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} allowToggle={true} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  )
}

const TasksManagerMemo = memo(TasksManager)
export { TasksManagerMemo as TasksManager }