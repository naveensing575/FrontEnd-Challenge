import PropTypes from 'prop-types';
function Items({broker}) {

  //prop drilling
  const{name, reviewCount, description, profilePicture, location, registration, rating}=broker;
  const userCode= location.slice(5);
  const FixedDesc= description || '';
  const starIcon= <i className="fa-solid fa-star star"/>
  //function for providing rating
  const handleRating=(rating)=>{
    let stars = [];
    if(rating>0)
    {
    for(let i= 0; i < rating; i++) {
      stars.push(starIcon);
    }
    return (
      <span>{stars}</span>
    )}
    else{
      return (<span className="para">(No ratings yet)</span>)
    }
  }
  return (
    <article id="Card">
        <div className="img-container">
          <img src={profilePicture} alt='user_image' className='image-style' height='120px' width='120px'/>
        </div>
        <h4 className='name'>{name.length>15?name.slice(0,15):name}</h4>
        <strong className='rating '>{rating===0?'':rating.toFixed(1)} {handleRating(rating)}</strong>
        <p className='reviews '>{reviewCount} <span className="count">Reviews</span> </p>
        <small style={{}}>Description: {FixedDesc.length>15?description.slice(0,10):description}...</small>
        <hr/>
        <i class="fa-solid fa-location-dot"></i> <span className="num-id">{location.slice(0,3)}</span>: <span className="color"> {userCode}</span>
        <span className="num-id side">{registration.slice(0,3)}</span>: <span className="color">{registration.slice(5)}</span>
        <button className='contact-button'>Contact</button>
      </article>
  )
}

Items.defaultProps={
  broker:[]
}
Items.propTypes={
  broker: PropTypes.object.isRequired
}

export default Items