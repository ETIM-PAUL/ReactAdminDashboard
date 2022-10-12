import React, { memo } from 'react'
import { patientsGrid, patientsData } from "../../assets/FakeData"
import { GridComponent, ColumnsDirective, ColumnDirective, Sort, Toolbar, Selection, Filter, Page, Edit, Inject } from '@syncfusion/ej2-react-grids'
import { Header } from '../../components/Header'

const Patients = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-main-dark-bg rounded-3xl" >
      <Header title="Patients" />
      <GridComponent id="gridComp" dataSource={patientsData} allowPaging allowSorting toolbar={['Delete']} editSettings={{ allowDeleting: true, allowEditing: true }} pageSettings={{ pageSize: 6 }} width="auto">
        <ColumnsDirective>
          {patientsGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Sort, Filter, Edit]} />
      </GridComponent>
    </div>
  )
}

const PatientsMemo = memo(Patients)
export { PatientsMemo as Patients }