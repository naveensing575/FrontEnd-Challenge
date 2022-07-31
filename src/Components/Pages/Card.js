import {useState,useEffect} from 'react';
import Items from "./Items";
import Spinner from '../Shared/Spinner';
import PropTypes from 'prop-types';

function Card({search}) {
    const [list, setList] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(true)
        fetch('https://mini-apps.stage.effi.com.au/api/Brokers?query=2000',{method:'GET'})
                .then((res) => res.json())
                .then(
                    (broker) => {
                        setList(broker);
                        setLoading(false);
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                        setLoading(false);
                        setError(error);
        // getBrokers();
    }
    );
}, []);

    // const getBrokers=async()=>{
    //         setLoading(true);
    //         await fetch('https://mini-apps.stage.effi.com.au/api/Brokers?query=2000',{method:'GET'})
    //         .then((response)=>{
    //             if(response.ok){
    //                 return response.json();
    //             }
    //         throw new Error('Something went wrong');
    //         })
    //         .then((responseJSON)=>{
    //             setLoading(false);
    //             setList(responseJSON);
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         });
    // }

    const filteredData = list.filter( broker => {
        if(search==='')
        {
            return broker
        }
        else
            return (broker.location.slice(5).includes(search))
    })
    // console.log(search)
    //condition for displaying loader and cards
    if (error) {
        return <>{error.message}</>;
    }
    else if(!loading && (!list || list.length === 0))
    {
        return <h3 className='d-flex align-items-center justify-content-center'>No broker found!</h3>
    }

    return loading? (<h3><Spinner/></h3>):(
        <div className='container'>
            <div className='row'>
        {
            filteredData.map((broker)=>{
                return (
                <div className="col-md-3" key={broker.id} >
                    <Items broker={broker}/>
                </div>    
            )})
        }
        </div>
        </div>
    )
}


Card.defaultProps={
    search:''
}

Card.propTypes={
    search: PropTypes.string.isRequired
}

export default Card