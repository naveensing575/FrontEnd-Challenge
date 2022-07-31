function Items({broker}) {

  //prop drilling
  const{name, reviewCount, description, profilePicture, location, registration, rating}=broker;
  const userCode= location.slice(5);
  const FixedDesc= description || '';

  //Rating provided
  const handleRating=(rating)=>{
    if(rating===5){
      return('⭐⭐⭐⭐⭐')
    }
    else if(rating===4){
      return('⭐⭐⭐⭐')
    }
    else if(rating===3){
      return('⭐⭐⭐')
    }
    else if(rating===2){
      return('⭐⭐')
    }
    else if(rating===1){
      return('⭐')
    }
    else{
      return (<span className="para">(No ratings yet)</span>)
    }
  }
  return (
    <article id="Card">
        <div className="img-container">
          <img src={profilePicture} alt='user_image' style={{borderRadius:'50%'}} height='120px' width='120px'/>
        </div>
        <h4 className='name'>{name.length>15?name.slice(0,15):name}</h4>
        <h3 className='rating '>{rating===0?'':rating.toFixed(1)} {handleRating(rating)}</h3>
        <p className='reviews '>{reviewCount} <span className="count">Reviews</span> </p>
        <small style={{}}>Description: {FixedDesc.length>15?description.slice(0,10):description}...</small>
        <hr/>
        <span className="num-id">{location.slice(0,3)}</span>: <span className="color"> {userCode}</span>
        <span className="num-id">{registration.slice(0,3)}</span>: <span className="color">{registration.slice(5)}</span>
        <button className='contact-button'>Contact</button>
      </article>
  )
}

export default Items