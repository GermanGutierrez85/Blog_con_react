import { client } from "./client";

export const postsExt ={
   get: async function textoPost(username, posteo_id){
    const response=await client.request({
        url:`/posteos/${username}/detail/${posteo_id}`,
        method:'GET'
    })
    if(response){
        
        return response.data
    }
  },
   put:async function modificarPost(username, posteo_id, titulo, texto){
    const response=await client.request({
        url:`/posteos/${username}/update/${posteo_id}`,
        method:'PUT',
        data:{
            titulo:titulo,
            texto:texto
        }
    })
    if(response){
        return response.data;
    }
  },
   delete: async function borrarPost(username, posteo_id){
    const response = await client.request({
        url:`/posteos/${username}/delete/${posteo_id}`,
        method:'DELETE',
    })
    if(response){
        return (response.data);
    }
  }
}

