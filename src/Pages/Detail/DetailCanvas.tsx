import { ResponsiveLine } from '@nivo/line';

const DetailCanvas = ({ data }: { data : any }) => (
    <ResponsiveLine
        data={[
    {
    "id": "week",
    "color": "hsl(281, 70%, 50%)",
    "data": data.graph
    },]}
        margin={{ top: 50, right: 150, bottom: 50, left: 60 }}
        xScale={{type: 'time', format: '%Y-%m-%d', precision: 'day',}}
        xFormat="time:%Y-%m-%d"
        yScale={{ type: 'linear', stacked: true, min: data.min, max: data.max }}
        curve="monotoneX"
        axisTop={null}
        axisRight={{
            tickValues: [ data.min, data.max ],
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
            tickValues: [ data.min, data.min+data.minus/4, data.min+data.minus*2/4, data.min+data.minus*3/4 ,data.max ],
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            format: '.2s',
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
        gridYValues={[ data.min, data.min+data.minus/4, data.min+data.minus*2/4, data.min+data.minus*3/4 ,data.max ]}
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