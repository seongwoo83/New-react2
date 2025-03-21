import { axios } from "axios";

export function useGetUserName(){

  axios.get('/username.json').then((result)=>{
    console.log(result.data);
  });

}