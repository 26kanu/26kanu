// const heading = React.createElement('h1',{},'hi shuvam');
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

const heading = React.createElement('div', { id: 'parent' },
    React.createElement('div', { id: 'child1' }, React.createElement('h1', { id: 'child1' }, 'i am single child')),
    React.createElement('div', { id: 'child2' }, [React.createElement('h1', { id: 'child21' }, 'i am children:1'),
    React.createElement('h2', { id: 'child2' }, 'i am children:2git n')
    ])
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);