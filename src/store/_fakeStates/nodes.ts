const rawData = [
    {
        id: '1',
        type: 'topic',
        ownerId: '',
        version: 0,
        properties: {
            title: 'root topic',
            children: ['2', '3', '6', '7'],
        },
    },
    {
        id: '2',
        type: 'topic',
        ownerId: '1',
        version: 0,
        properties: {
            title: 'node-2',
            children: [],
        },
    },
    {
        id: '3',
        type: 'topic',
        ownerId: '1',
        version: 0,
        properties: {
            title: 'node-3',
            children: ['4', '5'],
        },
    },
    {
        id: '4',
        type: 'topic',
        ownerId: '3',
        version: 0,
        properties: {
            title: 'node-4',
            children: [],
        },
    },
    {
        id: '5',
        type: 'topic',
        ownerId: '3',
        version: 0,
        properties: {
            title: 'node-5',
            children: [],
        },
    },
    {
        id: '6',
        type: 'topic',
        ownerId: '1',
        version: 0,
        properties: {
            title: 'node-6',
            children: ['8'],
        },
    },
    {
        id: '7',
        type: 'topic',
        ownerId: '1',
        version: 0,
        properties: {
            title: 'node-7',
            children: [],
        },
    },
    {
        id: '8',
        type: 'topic',
        ownerId: '6',
        version: 0,
        properties: {
            title: 'node-8',
            children: ['9'],
        },
    },
    {
        id: '9',
        type: 'topic',
        ownerId: '8',
        version: 0,
        properties: {
            title: 'node-9',
            children: [],
        },
    },
];

let obj: { [id: string]: typeof rawData[0] } = {};

export default rawData.reduce((acc, curr) => {
    acc[curr.id] = curr;
    return acc;
}, obj);
