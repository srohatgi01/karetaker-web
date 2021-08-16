import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";

function AddBP(props) {
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

  var submitBP = async (e) => {
    e.preventDefault();

    await axios
      .post(`http://localhost:4000/api/v1/users/bloodpressure`, {
        user_id: props.emailAddress,
        reading_value: info.reading_value,
      })

      .then((res) => {
        console.log("BP Readings created");
        setModalisOpen(false);
      })
      .catch((e) => console.log("BP readings not created with excepion" + e))
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div>
      <button className="cardTwo" onClick={() => setModalisOpen(true)}>
        Add bloodpressure Readings
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalisOpen(false)}
        className="modalStyling"
        overlayClassName="modalOverlayStyling"
      >
        <label>Reading</label>
        <input
          onChange={(e) => handle(e)}
          id="reading_value"
          value={info.reading_value}
          placeholder="reading in mmHg"
          type="text"
        ></input>
        <button
          onClick={(e) => {
            submitBP(e);
          }}
        >
          Add
        </button>
        <button onClick={() => setModalisOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}

export default AddBP;
