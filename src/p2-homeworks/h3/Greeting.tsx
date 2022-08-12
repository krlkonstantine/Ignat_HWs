import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error !== "" ? s.error : s.normalInput

    return (
        <div>
            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}
                   onKeyPress={(e) => {
                       if (e.charCode === 13) {
                           addUser()
                       }
                   }}/>
            <button className={s.addUserBtn} onClick={addUser}>add</button>
            <span className={s.totalNumber}>{totalUsers} users added</span>
            <span className={s.errorText}>{error}</span>

        </div>
    )
}

export default Greeting
