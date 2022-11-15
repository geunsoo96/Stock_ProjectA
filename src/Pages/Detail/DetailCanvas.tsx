import { ResponsiveLine } from '@nivo/line';
import { realData } from "@/Pages/Detail/Detail";

const DetailCanvas = ({ data }: { data : realData[] }) => (
  <ResponsiveLine
      data={[
  {
    "id": "week",
    "color": "hsl(281, 70%, 50%)",
    "data": [
      {
        "x": 1,
        "y": data[0].close
      },
      {
        "x": 2,
        "y": data[1].close
      },
      // {
      //   "x": '2019-05-03',
      //   "y": data[2].close
      // },
      // {
      //   "x": '2019-05-04',
      //   "y": data[3].close
      // },
      // {
      //   "x": '2019-05-05',
      //   "y": data[4].close
      // },
      // {
      //   "x": '2019-05-06',
      //   "y": data[5].close
      // },
      // {
      //   "x": '2019-05-07',
      //   "y": data[6].close
      // }
    ]
  },
]}
      margin={{ top: 50, right: 150, bottom: 50, left: 60 }}
      xScale={{ type: 'linear'}}
      yScale={{ type: 'linear', stacked: true, min: 30000, max: 40000 }}
      yFormat=" >-.2f"
      curve="monotoneX"
      axisTop={null}
      axisRight={{
          tickValues: [ 30000, 32000, 34000, 36000,38000,40000 ],
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          format: '.2s',
          legend: '',
          legendOffset: 0
      }}
      axisBottom={{
          tickValues: [0,1,2,3,4,5,6],
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          format: '.2f',
          legend: 'day',
          legendOffset: 36,
          legendPosition: 'middle'
      }}
      axisLeft={{
          tickValues: [30000,32000,34000,36000,38000,40000],
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          format: '.2s',
          legend: 'price',
          legendOffset: -40,
          legendPosition: 'middle'
      }}
      enableGridX={false}
      colors={{ scheme: 'spectral' }}
      lineWidth={1}
      pointSize={4}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={1}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
      gridXValues={[0,1,2,3,4,5,6]}
      gridYValues={[30000,31000,32000,33000,34000,35000,36000,37000,38000,39000,40000]}
      legends={[
          {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 140,
              translateY: 0,
              itemsSpacing: 2,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 12,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemBackground: 'rgba(0, 0, 0, .03)',
                          itemOpacity: 1
                      }
                  }
              ]
          }
      ]}
  />
)

export default DetailCanvas;