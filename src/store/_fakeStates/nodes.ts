const rawData = [
    {
        id: '1',
        type: 'topic',
        version: 0,
        properties: {
            title: 'node-1',
            children: ['2', '3'],
        },
    },
    {
        id: '2',
        type: 'topic',
        version: 0,
        properties: {
            title: 'node-2',
            children: [],
        },
    },
    {
        id: '3',
        type: 'topic',
        version: 0,
        properties: {
            title: 'node-3',
            children: [],
        },
    },
];

let obj: { [id: string]: typeof rawData[0] } = {};

export default rawData.reduce((acc, curr) => {
    acc[curr.id] = curr;
    return acc;
}, obj);
