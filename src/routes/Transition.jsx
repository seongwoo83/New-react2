import { useDeferredValue, useState, useTransition } from "react";

let iterArr = new Array(10000).fill(0);

export default function Transition(){
    let [name, setName] = useState('')

    let [isPending, startTransition] = useTransition()
    // startTransition원리 -> 내부의 함수 실행 시점을 뒤로 미룸
    // isPending -> startTransition함수가 실행중일떄 true

    let state = useDeferredValue(name)
    // useDeferredValue -> 파라미터로 넣은 변수가 늦게 로딩되면 기다려줌

    return(
        <div>
            <input type="text" onChange={(e)=>{
                startTransition(()=>{
                    setName(e.target.value)
                })}
            } />

            {
                isPending ? '로딩중' : 
                iterArr.map((v, i)=>{
                    return <h2 key={i}>{state}</h2>
                })
            }

        </div>
    )
}