import React, { Component } from 'react'
import Space from './Space';

class List extends Component {

    constructor() {
        super();
        this.state = {



        }
    }

    render() {


        const elements = ['one', 'two', 'three'];

        const elems = [
            {
                "name": "node1",
                "children": [
                    {
                        "name": "children1",
                        "children": []

                    }

                ]
            },

            {
                "name": "node2",
                "children": [
                    {
                        "name": "children2",
                        "children": []

                    }

                ]
            }



        ];
        //extract the below into a component
        //first map the input data array of objects till end(if no children are there)
        //then insert the same to jsx
        return (

            <div>


                <div>
                    <ul>
                        {
                            elems.map((value, index) => {
                                return <li key={index}>{value["name"]}
                                     {

                                        value["children"].map((child, childIndex) => {
                                            return <li className="nestedChild" key={childIndex}>{
                                                child["name"]
                                            }</li>
                                        })



                                    }


                                </li>
                            })

                        }
                    </ul>

                </div>


            </div>
        )


    }
}

export default List
