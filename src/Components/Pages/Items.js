function Items({broker}) {

  //css inside js as internal styling
  const imgStyle={
    borderRadius:'50%'
  }

  //prop drilling
  const{name, reviewCount, description, profilePicture, location, registration, rating}=broker;
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
          <img src={profilePicture} alt='user_image' style={imgStyle} height='120px' width='120px'/>
        </div>
        <h4 className='name'>{name.length>15?name.slice(0,15):name}</h4>
        <h3 className='rating '>{rating===0?'':rating.toFixed(1)} {handleRating(rating)}</h3>
        <p className='reviews '>{reviewCount} <span className="count">Reviews</span> </p>
        <p className='desc '>Description: {FixedDesc.length>15?description.slice(0,10):description}...</p>
        <hr/>
        <div className="">
          <span className="num-id">{location.slice(0,3)}</span><span>{location.slice(3)}</span>
          <span className="num-id">{registration.slice(0,3)}</span><span>{registration.slice(3)}</span>
        </div>
        <button className='contact-button'>Contact</button>
      </article>
  )
}

export default Items