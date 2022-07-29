import {useState,useEffect} from 'react'

function Card() {
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        getBrokers();
    }, );

    const getBrokers=async()=>{
        const response = await fetch('https://mini-apps.stage.effi.com.au/api/Brokers?query=2000');
        const data= await response.json();
        console.log(data);
        setisLoading(false);
    }
  return (
    <>
        
    </>
  )
}

export default Card