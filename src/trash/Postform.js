import axios from "axios";
import React,{useState,useEffect} from "react" ;

function Postform() {
    const url ="http://localhost:4000/api/v1/users/"
    const [data, setData] = useState({
            email_address: "",
            first_name: "",
            last_name: "",
            uuid: "",
            phone_number: "",
            gender: ""
    })
    function handle(e) {
        const newdata = {...data}
        newdata[e.target.id]= e.target.value
        setData(newdata)
        console.log(newdata)
    }
    function submit(e) {
        e.preventDefault();
        axios.post(url,{
            email_address: data.email_address,
            first_name: data.first_name,
            last_name: data.last_name,
            uuid: data.uuid,
            phone_number: data.phone_number,
            gender: data.gender
        })
        .then(res => {
            console.log(res.data)
        })

    }

    return (
        <div>
        <form onSubmit={(e)=> submit(e)}>
            <input onChange={(e) => handle(e)}id="email_address" value={data.email_address} placeholder="email address"type="text"></input>
            <input onChange={(e) => handle(e)}id="first_name" value={data.first_name} placeholder="first name"type="text"></input>
            <input onChange={(e) => handle(e)}id="last_name" value={data.last_name} placeholder="last name"type="text"></input>
            <input onChange={(e) => handle(e)}id="uuid" value={data.uuid} placeholder="uuid"type="number"></input>
            <input onChange={(e) => handle(e)}id="phone_number" value={data.phone_number} placeholder="phone number"type="number"></input>
            <input onChange={(e) => handle(e)}id="gender" value={data.gender} placeholder="gender"type="text"></input>
            <button>submit</button>
        </form>
        </div>
    )

}

export default Postform;