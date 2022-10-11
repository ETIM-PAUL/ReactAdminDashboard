import React, { memo } from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from "@syncfusion/ej2-react-charts"

const SparkLine = ({ ...props }) => {
  return (
    <SparklineComponent
      id={props.id}
      height={props.height}
      width={props.width}
      lineWidth={1}
      valueType="Numeric"
      fill={props.color}
      border={{ color: props.currentColor, width: 2 }}
      dataSource={props.data}
      xName="x"
      markerSettings={{ visible: true }}
      yName="yval"
      type={props.type}
      tooltipSettings={{
        visible: true,
        format: '${x} : data ${y}',
        trackLineSettings: {
          visible: true,
        }
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  )
}

const SparkLineMemo = memo(SparkLine)
export { SparkLineMemo as SparkLine }