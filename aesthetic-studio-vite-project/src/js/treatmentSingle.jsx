import React from 'react';





    export function TreatmentHeading(props){
        return (
            <>
                <h2> {props.title} </h2>
                <h3> {props.heading} </h3>
            </>

        )
    }

    export function TreatmentDescription(props){
        return (
            <>
                <div>
                    <ul>
                        <li>
                            {props.description}
                        </li>
                    </ul>
                    <p> {props.text} </p>
                </div>
                <div>
                    <h5> {props.header} </h5>
                    <ul>
                        <li> {} </li>
                    </ul>
                </div>
            </>


        )
    }

    export function TreatmentSidebar(props){
        return (
            <ul>
                <li> {props.price} </li>
                <li> {props.area} </li>
                <li> {props.problem} </li>
            </ul>
        )
    }

    export function TreatmentsPriceList(props) {
        return (
            <div>
                <a> {props.title} </a>
                <a> {props.price} </a>
            </div>
        )
    }



