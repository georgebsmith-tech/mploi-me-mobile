// import axios from 'axios'
import baseURL from '../../configs/baseURL'
const log = console.log


export default async function sendData(body = "", method, url = "",form) {
    const path = `${baseURL}/${url}`
    log(path)
    try {
        let resp;
        if(form){
            log(method)
resp = await fetch(path,
                {
                    method,
                    body,
                    headers:{
                        Accept:'application/json',
                        "Content-Type":"multipart/form-data"
                    }
                })
log(resp)
        }
        else if (method === "get") {
            resp = await fetch(path)
        } else if (method === "put") {
            resp = await fetch(path,
                {
                    method: "put",
                    body: JSON.stringify(body),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })

        } else {
            resp = await fetch(path,
                {
                    method: "post",
                    body: JSON.stringify(body),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
        }

        const data = await resp.json()
        log(data)
        return data
    } catch (err) {
        log(err)
    }

    // return data

}