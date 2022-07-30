import {useState,useEffect} from 'react'
import Items from "./Items";

function List() {
    const [list, setList] = useState([]);
    useEffect(() => {
        getBrokers();
    }, []);

    const getBrokers=async()=>{
        try{
            const response= await fetch('https://mini-apps.stage.effi.com.au/api/Brokers?query=2000');
            const data= await response.json();
            setList(data);
            console.log(data)
        }
        catch(err){
            console.error(err)
        }
    }
    return  (
        <div className='container'>
            <div className='row'>
        {
            list.map((broker)=>{
                return (
                <div className="col-md-3" key={broker.id} >
                    <Items  broker={broker}/>
                </div>    
            )})
        }
        </div>
        </div>
    )
}



export default List