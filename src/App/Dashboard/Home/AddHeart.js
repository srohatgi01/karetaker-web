import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Modal from 'react-modal'

function AddHeart(props) {
    const [modalIsOpen, setModalisOpen] = useState(false);
    const [info, setInfo] = useState({
      user_id: "",
      reading_value: "",
    });
  
    function handle(e) {
      const newinfo = { ...info };
      newinfo[e.target.id] = e.target.value;
      setInfo(newinfo);
      console.log(newinfo);
    }

    var submitHeart = async (e) => {
        e.preventDefault();
       
            
            await axios
              .post("http://localhost:4000/api/v1/users/heartrate", {
                user_id: props.emailAddress,
                reading_value: info.reading_value
            })
      
              .then((res) => {
                console.log("Heart Readings created");
                setModalisOpen(false)
              })
              .catch((e) => console.log("Heart readings not created with excepion"+e))
              .then((res) => {
                console.log(res);
              
              });
    
    };
    return (
        <div>
            <button className="cardTwo" onClick={()=>setModalisOpen(true)}>Add heart rate Readings</button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalisOpen(false)} className="modalStyling" overlayClassName="modalOverlayStyling">
            <label>Reading</label><input
              onChange={(e) => handle(e)}
              id="reading_value"
              value={info.reading_value}
              placeholder="reading in bpm"
              type="text"
            ></input>
            <button onClick={(e)=>{submitHeart(e)}}>Add</button>
            <button onClick={()=>setModalisOpen(false)}>Close</button>
            </Modal>
        </div>
    )
}

export default AddHeart
