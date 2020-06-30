import React, { Component } from 'react'


const withCounter = (WrapppedComponent,incrementVal=1) => {


    class WithCounter extends React.Component {
        constructor() {
            super();

            this.state = {
                count: 0
            }
        }

        incrementCount = (e) => {
            this.setState(prevState => {
                return { count: prevState.count + incrementVal }
            })
        }

        render(){
            return <WrapppedComponent 
                    count={this.state.count} 
                    incrementCount={this.incrementCount}
                    {...this.props}
                    />
        }
    }

    return WithCounter;

}

export default withCounter;