import React,{useState} from "react";
import Modal from 'react-modal';
import axios from "axios";

function PillModal(props){
    const [modalIsOpen, setModalisOpen]= useState(false)
    const [info, setInfo] = useState({
        pill_name: "",
        pill_time: ""
    })
    function handle(e) {
        const newinfo = {...info}
        newinfo[e.target.id]= e.target.value
        setInfo(newinfo)
        console.log(newinfo)
    }

    var submit = async (e) => {
        e.preventDefault();
       
            
            await axios
              .post(`http://localhost:4000/api/v1/users/pills`, {
                user_id: props.emailAddress,
                pill_name: info.pill_name,
                pill_time: info.pill_time
            })
      
              .then((res) => {
                console.log("pill created ")  ;
                // console.log(res);
                window.location = "/dashboard"
              })
              .catch((e) => console.log("pill not created with excepion"+e))
              .then((res) => {
                console.log(res);
              
              });
    
    };
     

    return(
        <Modal isOpen={true}>
            <input
              onChange={(e) => handle(e)}
              id="pill_name"
              value={info.pill_name}
              placeholder="Pill Name"
              type="text"
            ></input>
            <input onChange={(e) => handle(e)} type="time" id="pill_time" name="appt"
             min="09:00" max="18:00" value={info.pill_time} required>
            </input>
            <button onClick={(e)=>{submit(e)}}>Add</button>
        </Modal>
    )
}
export default PillModal;