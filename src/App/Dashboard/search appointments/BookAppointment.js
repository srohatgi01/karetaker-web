import React,{useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import DatePicker from "react-horizontal-datepicker";

function BookAppointment(){
    const {id}=useParams();
    const [doctorInfo,setDoctorInfo]=useState({});
    const [hospitalInfo,setHospitalInfo]=useState({});
    const [selectedDate,setSelectedDate]=useState("");
    const [slots,setSlots]=useState([]);
    const [selectedSlotId,setSelectedSlotId]=useState();

    async function getDoctorInfo(){
        await axios
        .get(`http://localhost:4000/api/v1/doctors/doctorbyid/${id}`)
        .then((response) => {
          console.log("Doctors found");
          console.log(response.data);
        //   let arrayData = Array.from(response.data);
          setDoctorInfo(response.data);
          console.log(response.data.hospitals_has_doctors[0].hospitals);
            setHospitalInfo(response.data.hospitals_has_doctors[0].hospitals)
        })
        .catch(async () => {
          console.log("no doctors found");
        });
    }
    async function getSlots(){
        await axios
        .get(`http://localhost:4000/api/v1/appointments/getfreeslots/${id}/${selectedDate}`)
        .then((response) => {
          console.log("Slots found");
          console.log("date is " + selectedDate)
          console.log(response);
             let arrayData = Array.from(response.data);
            setSlots(arrayData);
        })
        .catch(async () => {
          console.log("no slot found");
        });
    }
    useEffect(() => {
        getDoctorInfo()
    } , [id])
    
    const selectedDay = (val) =>{
        console.log(val)
        // YYYY-M-DD
        // "2021-06-26T00:00:00.000Z"
        const date= (val.getDate())<10 ? ("0"+val.getDate()):(val.getDate())
        const month= (val.getMonth())<10 ? ("0"+val.getMonth()):(val.getMonth())
        const year= val.getFullYear();
        setSelectedDate((year+"-"+month+"-"+date+"T00:00:00.000Z"));

        // see if this works
        // if (month < 10 && day < 10) {
        //     fulldate = '$year-0$month-0$day';
        //   } else if (month >= 10 && day < 10) {
        //     fulldate = '$year-$month-0$day';
        //   } else if (month < 10 && day >= 10) {
        //     fulldate = '$year-0$month-$day';
        //   } else if (month >= 10 && day >= 10) {
        //     fulldate = '$year-$month-$day';
        //   }
    };
    useEffect(() => {
        getSlots(selectedDate)
    } , [selectedDate])
    useEffect(() => {
        console.log(selectedSlotId)
    } , [selectedSlotId])

    async function postAppointment(){
        await axios
          .post("http://localhost:4000/api/v1/appointments", {
            appointment_date: selectedDate,
            user_id: "salikuddin2000@gmail.com",
            doctor_id: doctorInfo.doctor_id,
            hospital_id: hospitalInfo.hospital_id,
            slot_id: selectedSlotId,
            remarks: "yo yo HoneySingh"
        })
  
          .then((res) => {
            console.log("Appontment Booked 123456");
            // localStorage.setItem('created_user',JSON.stringify(data));
            window.location = `/dashboard/book_appointment/${id}`
          }
          )
          
          .catch((e) => console.log("Appointment NOT Booked"+e))
          .then((res) => {
            console.log(res);
          
          });
    }

    var currentdate = new Date(); 
    var datetime = currentdate.getFullYear() + "-"
                + (currentdate.getMonth()+1)  + "-" 
                + currentdate.getDate()

    let slotsList = slots.map((slot) =>(
        <button onClick={()=>{setSelectedSlotId(slot.slot_id)}}>
        <div key={slot.slot_id} className="slotsList">
            <li>{slot.start_time}</li>
        </div></button>
    ))
    return(
        <>  

    
            {/* {console.log("id is")}
            {console.log(id)} */}
            <h1> this is  {doctorInfo.first_name} {doctorInfo.last_name}</h1>
            <h2>{hospitalInfo.hospital_name} hospital,{hospitalInfo.hospital_address} </h2>
            <div className="calendar" >
            <DatePicker getSelectedDay= {selectedDay}
                  endDate={31}
                  selectDate={new Date(datetime)}
                  labelFormat={"MMMM yyyy"}
                  color={"#639FA5"}
            />
            </div>
            {/* {console.log(datetime)} */}
            {slotsList}
            <button onClick={()=>{postAppointment()}}>BookAppointment</button>
        </>
    )
}
export default BookAppointment;