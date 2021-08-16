import React,{useState,useEffect} from 'react';
import axios from 'axios';

function ShowAppointments(props) {

    const [appointments,setAppointments]=useState([{

    }])
    const [appointmentDate,setAppointmentDate]=useState("")
    

    async function getAppointments(email){
        await axios
        .get(`http://localhost:4000/api/v1/appointments/appointmentbyid/${email}`)
        .then((response) => {
          console.log("appointments found");
          
          console.log(response.data);
          //let arrayData = Array.from(response.data);
          (response.data).map((appointment)=>
          setAppointments([
              ...appointments,
              appointments[appointments.length]=
            {
                
                  date: appointment.appointment_date,
                  time: (appointment.slots!=null)?(appointment.slots.start_time):("no slot time chosen"),
                    appointmentStatus: appointment.status,
                    id:appointment.appointment_id
                
            }
        ]
            )
            //   setAppointmentDate(response.data.appointment_date)
          )  
          
        })
        .catch(async () => {
          console.log("no appointments found");
        });
    }
    useEffect(() => {
       getAppointments(props.emailAddress)
    }, [props.emailAddress])

    async function cancelAppointment(val,index){
        await axios.patch(`http://localhost:4000/api/v1/appointments/appointmentbyid/${val}`,
        {
            status: "CANCELED_BY_USER"
        })
        .then((res)=>{
            console.log(res);
            console.log("status changed")
            setAppointments([
                ...appointments,
                appointments[index]=
                {
                    appointmentStatus:res.data.status
                }
            ])

        }
        )
        .catch((e) => console.log("status not changed with exception"+e))
    }

    // let arrayData= Array.from(appointments)
    let ListedAppointments =appointments.map((appointment,index)=>
        // {console.log(appointment.time)}
    (appointment.date!=undefined)?<div className="card">
    <h2>date : {appointment.date}</h2>
    <h4>slot time:{appointment.time}</h4>
    <h6>status: {appointment.appointmentStatus}</h6>
    <button onClick={()=>{cancelAppointment(appointment.id,index)}}>Cancel appointment</button>
    {/* <h4>slot time:{appointment.time}</h4> */}
    </div> :"")
    return (
        <div>
            Show Appointments page
            {ListedAppointments}
        </div>
    )
}

export default ShowAppointments

// somObj = {
//     attr1,
//     attr2,
//     attr3 {
//         arr1,
//         arr2
//     }
// }


// somOjb['attr3'].arr1;