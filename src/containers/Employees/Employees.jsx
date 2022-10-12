import React, { memo } from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Inject, Toolbar } from '@syncfusion/ej2-react-grids'
import { employeesData, employeesGrid } from "../../assets/FakeData"
import { Header } from '../../components/Header'

const Employees = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl" >
      <Header category="HosPiD" title="Employees" />
      <GridComponent dataSource={employeesData} allowPaging allowSorting toolbar={['Search']} editSettings={{ allowDeleting: true, allowEditing: true }} pageSettings={{ pageSize: 6 }} width="auto">
        <ColumnsDirective>
          {employeesGrid.map((item, index) =>
            <ColumnDirective key={index} {...item} />
          )}
        </ColumnsDirective>
        <Inject services={[Search, Page, Toolbar]} />
      </GridComponent>
    </div>
  )
}

const EmployeesMemo = memo(Employees)
export { EmployeesMemo as Employees }