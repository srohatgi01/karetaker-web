import React,{useState,useEffect,useLayoutEffect} from 'react';
import axios from 'axios';
import PillModal from "./PillModal";
import Modal from 'react-modal';


function Pills(props){
    const [pills,setPills]=useState([]);

   async function getPills (){
    await axios.get(`http://localhost:4000/api/v1/users/pills/getpills/${props.emailAddress}`)
    .then((response)=>{
            console.log("pills found")
            console.log(response.data);
            setPills(response.data);
        })
        .catch(async()=>{
            console.log("no pills found");
        })
    console.log(props.emailAddress)
    }
  
    useLayoutEffect(() => {
        getPills()
      }, [props.emailAddress])

      let ListItem =pills.map((pills) =>
        <div className="card">
            <div key={pills.pills_id} className="container">
            <h3>{pills.pill_name}</h3>
            <span>{pills.pill_time}</span>
            </div>
        </div>
      )

    function openModal(){
        return(<PillModal emailAddress={props.emailAddress} />)
    }

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
              .post(`http://localhost:4000/api/v1/users/pills/`, {
                user_id: props.emailAddress,
              pill_name: info.pill_name,
                pill_time: `${info.pill_time}`
            })
      
              .then((res) => {
                console.log("pill created ");
                window.location = "/dashboard"
              })
              .catch((e) => console.log("pill not created with excepion"+e))
              .then((res) => {
                console.log(res);
              
              });
    
    };
    return(
        <>
            <div className="wrapper">
            <div className="pills">
            {ListItem}
            </div>
            <button className="cardTwo" onClick={()=>setModalisOpen(true)}>
            <div className="container">
            <span>+</span>
            </div>
            </button>    
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalisOpen(false)} className="modalStyling" overlayClassName="modalOverlayStyling">
            <label>Medication</label><input
              onChange={(e) => handle(e)}
              id="pill_name"
              value={info.pill_name}
              placeholder="Pill Name"
              type="text"
            ></input>
            <label>Time</label><input onChange={(e) => handle(e)} type="time" id="pill_time" name="appt"
             min="09:00" max="18:00" value={info.pill_time} required>
            </input>
            <button onClick={(e)=>{submit(e)}}>Add</button>
            <button onClick={()=>setModalisOpen(false)}>Close</button>
            </Modal>
            </div>
        </>
    )

}
export default Pills;