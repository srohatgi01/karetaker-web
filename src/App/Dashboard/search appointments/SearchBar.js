import React, { useState, useEffect } from "react";
import SearchField from "react-search-field";
import axios from "axios";
import "../../Style/appointment.css";
import diarrhea from "../../symptomsPng/diarrhea.png";
import distress from "../../symptomsPng/distress.png";
import fatigue from "../../symptomsPng/fatigue.png";
import headache from "../../symptomsPng/headache.png";
import nausea from "../../symptomsPng/nausea.png";
import stomachache from "../../symptomsPng/stomachache.png";
import stomachpain from "../../symptomsPng/stomachpain.png";
import weightloss from "../../symptomsPng/weightloss.png";
import { Link } from "react-router-dom";

function SearchBar() {
  const [searchWord, setSearchWord] = useState({
    word: "",
  });
  const [doctors, setDoctors] = useState([]);

  async function getDoctors(info) {
    await axios
      .get(`http://localhost:4000/api/v1/doctors/search/${info}`)
      .then((response) => {
        console.log("Doctors found");
        console.log(response.data);
        let arrayData = Array.from(response.data);
        setDoctors(arrayData);
      })
      .catch(async () => {
        console.log("no doctors found");
      });
  }

  useEffect(() => {
    getDoctors(searchWord.word);
  }, [searchWord]);

  function handle(e) {
    const newinfo = { ...searchWord };
    newinfo[e.target.id] = e.target.value;
    setSearchWord(newinfo);
    console.log(newinfo);
    // getDoctors(newinfo)
  }

  function onBookApponitment(id){
    return(<>
      <Link to={{
        pathname:'/dashboard/book_appointment',
        doctorId:id}}/>
        {console.log("book appointment Clicked" + id)}
        </>
      
    )
  }
    
  let ListItem = doctors.map((doctor) => (
    <div className="searchCard">
      <div key={doctor.doctor_id} className="searchContainer">
        {/* <section className="colorBar"> </section> */}
        <li>
          <h3>Dr. {doctor.first_name} {doctor.last_name}</h3>
          <h5>{doctor.specialities.speciality_name}</h5>
          <span>Practicing for <span className="practicingYears">{doctor.practicing_years}</span> years</span>
          {/* <Link to={{
            pathname:'/dashboard/book_appointment',
            book_appointmentProps:{
              doctorID:doctor.doctor_id}}}> */}
              <Link to={`/dashboard/book_appointment/${doctor.doctor_id}`} > <button>Book Appointment</button></Link>
        </li>
      </div>
    </div>
  ));

  return (
    <div>
      {/* {console.log("in render")}
          {console.log(doctors)} */}

      <div className="searchBg">
        <h2>Search for doctors & hospital</h2>
        <input
          type="text"
          placeholder="       Search here"
          id="word"
          onChange={(e) => handle(e)}
          value={searchWord.word}
          className="searchBar"
        />
        <div className="buttonsWrapper">
          <button>General Hospital</button>
          <button>General Hospital</button>
          <button>General Hospital</button>
        </div>
        
      </div>
      {(doctors.length == 0 || searchWord.word.length ==0)? (
        <div className="symptomsPng">
          <h3>Symptoms</h3>
          <button className="symptomsButton">
            <img src={diarrhea} />
            <span>diarrhea</span>
          </button>
          <button className="symptomsButton">
            <img src={distress} />
            <span>distress</span>
          </button>
          <button className="symptomsButton">
            <img src={fatigue} />
            <span>fatigue</span>
          </button>
          <button className="symptomsButton">
            <img src={headache} />
            <span>headache</span>
          </button>
          <button className="symptomsButton">
            <img src={nausea} />
            <span>nausea</span>
          </button>
          <button className="symptomsButton">
            <img src={stomachpain} />
            <span>stomachpain</span>
          </button>
          <button className="symptomsButton">
            <img src={stomachache} />
            <span>stomachache</span>
          </button>
          <button className="symptomsButton">
            <img src={weightloss} />
            <span>weightloss</span>
          </button>
        </div>
      ) : (
        ListItem
      )}
    </div>
  );
}

export default SearchBar;
