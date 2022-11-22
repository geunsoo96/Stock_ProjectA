import { ResponsiveLine } from '@nivo/line';

const DetailCanvas = ({ data }: { data : any }) => (
    <ResponsiveLine
        data={[
    {
    "id": "stock",
    "color": "hsl(281, 70%, 50%)",
    "data": data.graph
    },]}
        margin={{ top: 50, right: 150, bottom: 50, left: 60 }}
        xScale={{type: 'time', format: '%Y-%m-%d', precision: 'day',}}
        xFormat="time:%Y-%m-%d"
        yScale={{ type: 'linear', stacked: true, min: data.min, max: data.max }}
        // curve="monotoneX"
        axisTop={null}
        axisRight={{
            tickValues: [
                Math.floor(data.min),
                Math.floor(data.min+data.minus/4),
                Math.floor(data.min+data.minus*2/4),
                Math.floor(data.min+data.minus*3/4),
                Math.floor(data.max)
            ],
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendOffset: 0
        }}
        axisBottom={{
            format: '%y-%m-%d',
            // legend: 'day',
            // legendOffset: 36,
            // legendPosition: 'middle'
            tickSize: 5,
            tickPadding: 10,
            tickRotation: -35,
        }}
        axisLeft={{
            tickValues: [
                Math.floor(data.min),
                Math.floor(data.min+data.minus/4),
                Math.floor(data.min+data.minus*2/4),
                Math.floor(data.min+data.minus*3/4),
                Math.floor(data.max)
            ],
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            format: '',
        }}
        enableGridX={true}
        colors={{ scheme: 'spectral' }}
        lineWidth={1}
        pointSize={1}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={1}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        gridYValues={[
            Math.floor(data.min),
            Math.floor(data.min+data.minus/4),
            Math.floor(data.min+data.minus*2/4),
            Math.floor(data.min+data.minus*3/4),
            Math.floor(data.max)
        ]}
    />
)

export default DetailCanvas;