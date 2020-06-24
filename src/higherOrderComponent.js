import React from 'react';

const higherOrderComponent = originalComponent => {

    class NewComponent extends React.Component {

        render() {
            return <NewComponent name='Dhana'/>
        }
    }

    return NewComponent;
}

export default higherOrderComponent;