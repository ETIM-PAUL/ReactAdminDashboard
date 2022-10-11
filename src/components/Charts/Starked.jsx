import React from 'react'
import {
  ChartComponent, SeriesCollectionDirective, SeriesDirective, Category, Inject, Tooltip, StackingColumnSeries, Legend,
} from '@syncfusion/ej2-react-charts';
import { stackedCustomSeries, stackedPrimaryYAxis, stackedPrimaryXAxis } from '../../assets/FakeData';

const Starked = ({ ...props }) => {
  return (
    <ChartComponent
      id="charts"
      width={props.width}
      height={props.height}
      style={{ textAlign: 'center' }}
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis
      }
      chartArea={{ border: { width: 0 } }}
      legendSettings={{ enableHighlight: true, background: "white" }}
      title="Amount of Bills by Payment Method"
      tooltip={{ enable: true }}
    >
      <Inject
        services={[StackingColumnSeries, Legend, Tooltip, Category]}
      />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) =>
          <SeriesDirective key={index} {...item} opacity={1} border={{ width: 2, color: '#666666' }} />)}
      </SeriesCollectionDirective>
    </ChartComponent >
  )
}

export default Starked