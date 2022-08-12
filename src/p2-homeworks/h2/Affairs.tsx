import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import aff from './Affairs.module.css'

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (priority: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter("all")
    }
    const setHigh = () => {
        props.setFilter("high")
    }
    const setMiddle = () => {
        props.setFilter("middle")
    }
    const setLow = () => {
        props.setFilter("low")
    }

    return (
        <div className={aff.affairsContainer}>
            {mappedAffairs}
            <div className={aff.buttonsContainer}>
                <button className={props.filter === 'all' ?  aff.activeFilterButton : aff.filterButton} onClick={setAll}>All</button>
                <button className={props.filter === 'high' ? aff.activeFilterButton : aff.filterButton} onClick={setHigh}>High</button>
                <button className={props.filter === 'middle' ? aff.activeFilterButton : aff.filterButton} onClick={setMiddle}>Middle</button>
                <button className={props.filter === 'low' ? aff.activeFilterButton : aff.filterButton} onClick={setLow}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
