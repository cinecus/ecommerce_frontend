import axios from 'axios'

const GET = async (path:string,config?:Object):Promise<any> => {
    return new Promise((resolve,reject)=>{
        axios({
            method:'GET',
            url:`${process.env.NEXT_PUBLIC_BACKEND_URI}${path}`,
            withCredentials: true,
            ...config
        })
        .then(res=>resolve(res.data))
        .catch(error=>reject(error.response.data))
    })
}

const POST = async (path:string,data:{},config?:Object):Promise<any> => {

    return new Promise((resolve,reject)=>{
        axios({
            method:'POST',
            url:`${process.env.NEXT_PUBLIC_BACKEND_URI}${path}`,
            data:data,
            withCredentials:true,
            ...config
        },
        )
        .then(res=>{
            console.log('res', res)
            resolve(res.data)
        })
        .catch(error=>reject(error.response.data))
    })
}

const DELAY = (fn:any,t:number)=>{
    setTimeout(()=>{
        fn()
    },t)
    
}

export {GET,POST,DELAY}