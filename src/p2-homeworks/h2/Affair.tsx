import React from 'react'
import {AffairType} from "./HW2";
import aff from "./Affairs.module.css";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div>
            <span className={aff.affairTitle}>{props.affair.name}</span>

            <button className={aff.affairDeleteButton} onClick={deleteCallback}>x</button>
            <span className={aff[props.affair.priority]}>
                {props.affair.priority}
            </span>
        </div>
    )
}

export default Affair
