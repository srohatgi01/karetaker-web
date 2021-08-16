import React,{useState,useLayoutEffect} from 'react';
import axios from 'axios';
import SearchBar from "./SearchBar"
import "../../Style/appointment.css";
import diarrhea from "../../symptomsPng/diarrhea.png";
import distress from "../../symptomsPng/distress.png";
import fatigue from "../../symptomsPng/fatigue.png";
import headache from "../../symptomsPng/headache.png";
import nausea from "../../symptomsPng/nausea.png";
import stomachache from "../../symptomsPng/stomachache.png";
import stomachpain from "../../symptomsPng/stomachpain.png";
import weightloss from "../../symptomsPng/weightloss.png";

function Appointments() {



    return (
        <div>
            <SearchBar />
            {/* <div className="symptomsPng" > */}
            {/* <h3>Symptoms</h3>
            <button className="symptomsButton"><img src={diarrhea}/><span>diarrhea</span></button>
            <button className="symptomsButton"><img src={distress}/><span>distress</span></button>
            <button className="symptomsButton"><img src={fatigue}/><span>fatigue</span></button>
            <button className="symptomsButton"><img src={headache}/><span>headache</span></button>
            <button className="symptomsButton"><img src={nausea}/><span>nausea</span></button>
            <button className="symptomsButton"><img src={stomachpain}/><span>stomachpain</span></button>
            <button className="symptomsButton"><img src={stomachache}/><span>stomachache</span></button>
            <button className="symptomsButton"><img src={weightloss}/><span>weightloss</span></button>
            </div> */}
            
        </div>
    )
}

export default Appointments;
