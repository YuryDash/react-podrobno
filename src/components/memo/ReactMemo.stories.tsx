import React, {useState} from "react";

export default {
    title: 'React memo',
}

const NewMessageCounter = (props: { count: number }) => {
    console.log('rerender num')

    return <div>{props.count}</div>

}
const UsersHuUsers = (props: { users: Array<string> }) => {
    console.log('rerender')
    return (
        <div>
            {props.users.map(el => {
                return (
                    <div key={el}>{el}</div>
                )
            })}
        </div>
    )
}
//==============================================
//Использование реакт мемео
const Users = React.memo(UsersHuUsers)
//==============================================

export const Example = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Yury', 'Hleb', 'Acbar', 'Valeron'])
    return (
        <>
            <button onClick={()=>setCounter(counter +1)}>+</button>
            <NewMessageCounter count={counter}/>
            <Users users={users}/>
        </>
    )
}