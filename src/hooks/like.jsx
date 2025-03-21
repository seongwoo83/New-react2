import { useState } from "react";

export function useLike(){

    //다른 곳에서도 필요할 때
    let [like, setLike] = useState(0);
    function addLike(){
    setLike(a=> a+1)
    }

    return [ like, addLike ]
}

// 함수에 use---() 가 들어있으면
// 함수 이름이 use로 시작해야함 -> custom hook