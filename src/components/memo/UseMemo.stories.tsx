
import React, {useMemo, useState} from "react";
export default {
    title: 'useMemo'
}

export const ExampleUseMemoScenarioOne = () => {
const [a, setA] = useState<number>(3)
const [b, setB] = useState<number>(3)

    let resA = 1;
    let resB = 1;

    useMemo(()=>{
        let tempResultA = 1;
        for (let i = 1; i <= a; i++){
            let fake = 0;
            while(fake < 2000){
                fake++
                const fakeValue = Math.random()
                console.log(fakeValue)
            }
            tempResultA  *= i
        }
        return tempResultA;
    },[a])


    for (let i = 1; i <= b; i++){
       resB  *= i
    }

    return (
        <div>
            <input type="text" value={a} onChange={(e)=>setA(+e.currentTarget.value)}/>
            <input type="text" value={b} onChange={(e)=>setB(+e.currentTarget.value)}/>
            <hr/>
            <div>Result for a: {resA}</div>
            <div>Result for b: {resB}</div>
        </div>
    )
}




    const UsersHuUsers = (props: { users: Array<string> }) => {
        return (
            <div>
                {props.users.map(el => {
                    return <div key={el}>{el}</div>
                })}
            </div>
        )
    }
//==============================================
//Использование реакт мемео
    const Users = React.memo(UsersHuUsers)
//==============================================

     export const HelpReactMemo = () => {
        const [counter, setCounter] = useState(0)
        const [users, setUsers] = useState(['Yury', 'Hleb', 'Acbar', 'Valeron'])

         const newArray = useMemo(() => {
             const newArray = users.filter(el => el.toLowerCase().indexOf('a') > -1)
             return newArray
         },[users])
        return (
            <>
                <button onClick={()=>setCounter(counter +1)}>+</button>
                {counter}
                <Users users={users}/>
            </>
        )
    }
