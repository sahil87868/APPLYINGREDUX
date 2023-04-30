import * as types from './actionType'
import axios from 'axios'


// getdata function pass values in states
const getdata=(users)=>({
    type:types.GET_USER,
    payload:users
})


export const getuserdata=()=>{
    return function(dispatch){
        axios.get(`http://localhost:3000/user`)
        .then((resp)=>{   
            dispatch(getdata(resp.data))
            console.log(resp.data);    
        })
    }
}

export const add_data=(data)=>{
    return function(dispatch){
        axios.post(`http://localhost:3000/user`,data)
        .then((resp)=>{
        })
        .catch(error=>console.log(error))
    }
}

export const delete_data=(id)=>{
    return function(dispatch){
        axios.delete(`http://localhost:3000/user/${id}`)
        .then((resp)=>{
        })
        .catch(error=>console.log(error))
    }
}


const editdata=(user)=>({
    type:types.GET_SINGLE_USER,
    payload:user
})

export const edit_data=(id)=>{
    return function(dispatch){
        axios.get(`http://localhost:3000/user/${id}`)
        .then((resp)=>{   
            dispatch(editdata(resp.data))   
        })
    }
}

export const update_data=(id,formvalue)=>{
    return function(){
        axios.patch(`http://localhost:3000/user/${id}`,formvalue)
        .then((resp)=>{
        })
        .catch(error=>console.log(error))
    }
}
