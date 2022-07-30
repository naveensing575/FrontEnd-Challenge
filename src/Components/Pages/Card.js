import {useState,useEffect} from 'react'
import Items from "./Items";

function List() {
    const [list, setList] = useState([]);
    useEffect(() => {
        getBrokers();
    }, );

    const getBrokers=async()=>{
        const response= await fetch('https://mini-apps.stage.effi.com.au/api/Brokers?query=2000')
        const data= await response.json();
        setList(data);
        console.log(data)
    }
    return  list.map((i)=><Items key={i.id} id={i.name} location={i.location} name={i.name} crn={i.registartion} desc={i.description} image={i.profilePicture} reviews={i.reviewCount} />)
}



export default List