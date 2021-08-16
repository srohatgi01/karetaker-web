import React,{useState,useEffect,useLayoutEffect} from 'react'
import axios from 'axios';
import Pills from "./Pills"
import PillModal from "./PillModal";
import Modal from 'react-modal';
import Latest_readings from './Latest_readings';
import AddReadings from './AddReadings';

function Home (props){
    return (
        <div>
            <h1>Welcome {props.firstName}</h1>
            <h2>How are you feeling today?</h2>
            
            <Pills firstName={props.firstName} emailAddress={props.emailAddress}/>
            <br />
            <Latest_readings emailAddress={props.emailAddress} />
            <AddReadings emailAddress={props.emailAddress}/>
        </div>
    )
}

export default Home;