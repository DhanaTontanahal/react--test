import React, { Component } from 'react'

class AutoComplete extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                "India",
                "US",
                "Germany",
                "India2"
            ],
            autoCompleteData: [],
            showAutoComplete: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.resetAutoComplete = this.resetAutoComplete.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    resetAutoComplete() {
        this.setState({
            autoCompleteData: [],
            showAutoComplete: false
        })
    }

    handleClick(e){

        if(e.keyCode ==13)
        {
            console.log("handle enter click")
        }
    }
    handleChange(event) {
        // console.log(event.target.value);
        const inputSearch = event.target.value;

        if (inputSearch.split("").length === 0) {
            this.resetAutoComplete();
        }
        // console.log(this.state.data.includes(event.target.value));

        // const filteredVals = this.state.data.filter((e) => {
        //     return e === event.target.value;
        // })

        //enhanced
        const filteredVals = this.state.data.filter((e) => {
            return e.toLowerCase().indexOf(inputSearch.toLowerCase()) > -1;
        })
        // console.log(filteredVals)

        if (filteredVals.length > 0) {
            this.setState({
                autoCompleteData: filteredVals,
                showAutoComplete: true
            })
        }
    }

    render() {

        const { autoCompleteData } = this.state;
        return (
            <div>
                <input type="text" placeholder="Enter the word" onChange={this.handleChange} />

                {
                    this.state.showAutoComplete ?
                        autoCompleteData.map((d) => {
                            return <ul className="suggestions"><li onClick={this.handleClick} key={d}>{d}</li></ul>
                        })
                        : null}
            </div>
        )
    }
}

export default AutoComplete
