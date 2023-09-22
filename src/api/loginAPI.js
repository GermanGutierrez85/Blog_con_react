import { client } from "./client";
import qs from "qs";

export const loginApi={
    post: async function(usuario, password){
        const data = qs.stringify(
            {
                'usuario': usuario,
                'password': password,
            }
        )
        const response = await client.request({
            url:`/login`,
            method: 'POST',
            headers:{
                'Content-type':'application/x-www-form-urlencoded'
            },
            data: data
        })
        if(response){
            console.log(response.data)
            return response.data
        }
    },
}
