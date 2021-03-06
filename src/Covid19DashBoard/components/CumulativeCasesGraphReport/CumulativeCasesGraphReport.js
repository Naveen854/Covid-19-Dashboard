import React from 'react'
import {
   ResponsiveContainer,
   LineChart,
   Line,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   Legend
} from 'recharts'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'

@observer
class CumulativeCasesGraphReport extends React.Component {
   render() {
      const { stateCumulativeReportData } = this.props

      return (
         <div data-testid = "cumulativeCasesGraphReport"style={{ width: '100%', height: 200 }}>
            <ResponsiveContainer>
               <LineChart
                  data={toJS(stateCumulativeReportData)}
                  margin={{
                     top: 0,
                     right: 0,
                     left: 0,
                     bottom: 0
                  }}
               >
                  <XAxis dataKey='tillDate' />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                     type='monotone'
                     dataKey='totalConfirmed'
                     stroke='#b30000'
                     activeDot={{ r: 1 }}
                  />
                  <Line
                     type='monotone'
                     dataKey='totalActive'
                     stroke='#0033cc'
                     activeDot={{ r: 1 }}
                  />
                  <Line
                     type='monotone'
                     dataKey='totalRecovered'
                     stroke='#00b300'
                     activeDot={{ r: 1 }}
                  />
                  <Line
                     type='monotone'
                     dataKey='totalDeaths'
                     stroke='#e6e600'
                     activeDot={{ r: 1 }}
                  />
               </LineChart>
            </ResponsiveContainer>
         </div>
      )
   }
}

export default CumulativeCasesGraphReport
