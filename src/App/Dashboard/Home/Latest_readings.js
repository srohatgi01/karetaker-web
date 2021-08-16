import { HelpOutline } from '@material-ui/icons';
import React,{useState,useEffect,useLayoutEffect} from 'react';
import axios from 'axios';
import { func } from 'prop-types';

function Latest_readings(props){
  //rfce

  const [sugar,setSugar] = useState()
  const [bloodPressure,setBloodPressure] = useState()
  const [heart,setHeart] = useState()


  //Sugar
      async function getSugarReadings (){
     await axios.get(`http://localhost:4000/api/v1/users/sugar/latest/${props.emailAddress}`)
     .then((response)=>{
             console.log("Sugar reading found")
             console.log(response.data.value)             
             setSugar(response.data.value)
             
         })
         .catch(async()=>{
             console.log("Sugar no readings found");
         })
     console.log(props.emailAddress)
     }


     //BP
      async function getBloodPressureReadings (){
     await axios.get(`http://localhost:4000/api/v1/users/bloodpressure/latest/${props.emailAddress}`)
     .then((response)=>{
             console.log("BloodPressure reading found")
             console.log(response.data.reading_value)             
             setBloodPressure(response.data.reading_value)
             
         })
         .catch(async()=>{
             console.log("BloodPressure no readings found");
         })
     console.log(props.emailAddress)
     }


     //Heart
      async function getHeartReadings (){
     await axios.get(`http://localhost:4000/api/v1/users/heart/latest/${props.emailAddress}`)
     .then((response)=>{
             console.log("Heart reading found")
             console.log(response.data.reading_value)             
             setHeart(response.data.reading_value)
             
         })
         .catch(async()=>{
             console.log("Heart no readings found");
         })
     console.log(props.emailAddress)
     }

     useEffect(() => {
        getSugarReadings()
     }, [props.emailAddress])
     useEffect(() => {
        getBloodPressureReadings()
     }, [props.emailAddress])
     useEffect(() => {
        getHeartReadings()
     }, [props.emailAddress])

  return(
      <>
        <div className="readingsCard">
          {sugar} mg/DL
        </div>
        <div className="readingsCard">
          {bloodPressure} mmHg
        </div>
        <div className="readingsCard">
          {heart} bpm
        </div>
      </>
  )
}
export default Latest_readings;