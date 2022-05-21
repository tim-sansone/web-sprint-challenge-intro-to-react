// Write your Character component here
import React, { useRef } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

export default function Character({ data }){

    const infoRef = useRef(null);

    const display = () => {
        infoRef.current.classList.toggle("hide");
    }

    return (
        <div className="card">
            <div className="card-header">
                <h3>{`${data.name}`}</h3>
               <button onClick={display}><FontAwesomeIcon icon={faAngleDown} size="xl"/></button>
            </div>
            
            <div className="card-info hide" ref={infoRef}>
                <p>{`Birth Year: ${data.birth_year}`}</p>
                <p>{`Height: ${data.height}`}</p>
                <p>{`Mass: ${data.mass}`}</p>
                <p>{`Eye Color: ${data.eye_color}`}</p>
                <p>{`Hair Color: ${data.hair_color}`}</p>
                <p>{`Skin Color: ${data.skin_color}`}</p>
            </div>
            
        </div>
    )

}