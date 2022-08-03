import {useState,useEffect} from 'react';
import Items from "./Items";
import Spinner from '../Shared/Spinner';
import PropTypes from 'prop-types';

function Card({search}) {
    const [list, setList] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const API=`https://mini-apps.stage.effi.com.au/api/Brokers?query=${parseInt(search)}`
    useEffect(() => {
        setLoading(true)
        //fetch API with GET method
        fetch(API,{method:'GET'})
                .then((res) => res.json())
                .then(
                    (broker) => {
                        setList(broker);
                        setLoading(false);
                        // console.log(broker);
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                        setLoading(false);
                        setError(error);
    }
    );
}, [search]);



    //condition for displaying loader and card component
    if (error) {
        return <h3 className='d-flex align-items-center justify-content-center' style={{color:'white'}}>{error.message}</h3>;
    }
    else if(!loading && (!list || list.length === 0))
    {
        return <h3 className='d-flex align-items-center justify-content-center' style={{color:'white'}}>No broker found!</h3>
    }

    return loading? (<h3><Spinner/></h3>):(
        <div className='container' data-testid="card">
            <div className='row'>
        {
            list.map((broker, id)=>{
                return (
                <div className="col-md-3 col-xs-4" key={id} >
                    <Items broker={broker}/>
                </div>    
            )})
        }
        </div>
        </div>
    )
}


Card.defaultProps={
    search:1000
}

Card.propTypes={
    search: PropTypes.number.isRequired
}

export default Card