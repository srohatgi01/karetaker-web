import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Bar, Line} from 'react-chartjs-2';

function Graphs(props) {


    const [sugarData, setSugarData]= useState([{
        time:'',
        value:''
    }]);
    const [bpData, setBpData]= useState([]);
    const [heartData, setHeartData]= useState([]);

    async function getSugar(){
        await axios
        .get(`http://localhost:4000/api/v1/users/sugar/sugarbyid/${props.emailAddress}`)
        .then((response) => {
          console.log("Sugar readings found");
          console.log(response.data);
          (response.data).map((stat)=>
          setSugarData([
              ...sugarData,
              sugarData[sugarData.length]=
                    {                
                          time: stat.timestamp,
                          value: stat.value                     
                    }
            ])        
          )  
        })
        .catch(async () => {
          console.log("no sugar readings found");
        });
    }
    async function getBp(){
        await axios
        .get(`http://localhost:4000/api/v1/users/bloodpressure/bloodpressurebyid/${props.emailAddress}`)
        .then((response) => {
          console.log("BP readings  found");
          console.log(response.data);
          (response.data).map((stat)=>
          setBpData([
              ...bpData,
              bpData[bpData.length]=
                    {                
                          time: stat.timestamp,
                          value: stat.reading_value                     
                    }
            ])        
          )  
        })
        .catch(async () => {
          console.log("no BP readings found");
        });
    }
    async function getHeart(){
        await axios
        .get(`http://localhost:4000/api/v1/users/heart/heartbyid/${props.emailAddress}`)
        .then((response) => {
          console.log("heart rate readings found");
          
          console.log(response.data);
          (response.data).map((stat)=>
          setHeartData([
              ...heartData,
              heartData[heartData.length]=
                    {                
                          time: stat.timestamp,
                          value: stat.reading_value                     
                    }
            ])        
          )  
        })
        .catch(async () => {
          console.log("no heart reading found");
        });
    }

    useEffect(() => {
        getSugar()
    }, [props.emailAddress])
    useEffect(() => {
        getBp()
    }, [props.emailAddress])
    useEffect(() => {
        getHeart()
    }, [props.emailAddress])

    return (
        <div >
            Graphs Page
            <Bar  
            height="50"
            width="100"  
            // options={{ maintainAspectRatio: false }}     
                data={{
                    labels: (sugarData.map((stat)=>(stat.time))),
        datasets: [{
            label: 'Sugar Readings',
            data: (sugarData.map((stat)=>(stat.value))),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
                }}
                />
            <Line      
                        height="50"
            width="100"       
            
                data={{
                    labels: (sugarData.map((stat)=>(stat.time))),
        datasets: [{
            label: 'Sugar Readings',
            data: (sugarData.map((stat)=>(stat.value))),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
                }}
                />
            <Bar            height="50"
            width="100"       
                data={{
                    labels: (bpData.map((stat)=>(stat.time))),
        datasets: [{
            label: 'Blood pressure readings',
            data: (bpData.map((stat)=>(stat.value))),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
                }}
                />
            <Line            height="50"
            width="100"       
                data={{
                    labels: (bpData.map((stat)=>(stat.time))),
        datasets: [{
            label: 'Blood pressure readings',
            data: (bpData.map((stat)=>(stat.value))),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
                }}
                />
            <Bar            height="50"
            width="100"       
                data={{
                    labels: (heartData.map((stat)=>(stat.time))),
        datasets: [{
            label: 'Heart rate reading',
            data: (heartData.map((stat)=>(stat.value))),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
                }}
                

                // options={{
                //     maintainAspectRatio:false
                // }}
                />
            <Line            height="50"
            width="100"       
                data={{
                    labels: (heartData.map((stat)=>(stat.time))),
        datasets: [{
            label: 'Heart rate reading',
            data: (heartData.map((stat)=>(stat.value))),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
                }}
                

                // options={{
                //     maintainAspectRatio:false
                // }}
                />
        </div>
    )
}

export default Graphs;
