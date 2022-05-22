// Write your Character component here
import React, { useRef } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

const StyledCard = styled.div`
    width: 95%;
    background-color: rgb(103, 171, 216, 0.8);
    border: 1px solid black;
    border-radius: 10px;
    color: black;
    text-shadow: 1px 1px 5px #fff;
    margin-bottom: 2%;
    overflow: hidden;
    height: 3.6rem;
    transition: all 0.5s
    `

const StyledCardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 2%;
`

const StyledButton = styled.button`
    background-color: inherit;
    border: none;
    transition: all 0.5s;
`



export default function Character({ data }){

    const infoRef = useRef(null);
    const buttonRef = useRef(null);

    const display = (event) => {
        infoRef.current.classList.toggle("unhide");
        buttonRef.current.classList.toggle("up");
        console.log(buttonRef);
    }

    return (
        <StyledCard ref={infoRef}>
            <StyledCardHeader>
                <h3>{`${data.name}`}</h3>
               <StyledButton onClick={display} ref={buttonRef}><FontAwesomeIcon icon={faAngleDown} size="xl" /></StyledButton>
            </StyledCardHeader>
            
            <div className="card-info" >
                <p>{`Birth Year: ${data.birth_year}`}</p>
                <p>{`Height: ${data.height}`}</p>
                <p>{`Mass: ${data.mass}`}</p>
                <p>{`Eye Color: ${data.eye_color}`}</p>
                <p>{`Hair Color: ${data.hair_color}`}</p>
                <p>{`Skin Color: ${data.skin_color}`}</p>
            </div>
            
        </StyledCard>
    )

}