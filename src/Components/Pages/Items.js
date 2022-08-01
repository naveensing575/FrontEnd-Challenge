import PropTypes from 'prop-types';
function Items({broker}) {

  //prop drilling
  const{name, reviewCount, description, profilePicture, location, registration, rating}=broker;

  //creating a fall value so that above props don't pickup undefined on doing operations.
  const nam=name || '';
  const rtg= rating || 0;
  const regis=registration || '';
  const loc=location || '';
  const userCode= loc.slice(5);
  const FixedDesc= description || '';
  const starIcon= <i className="fa-solid fa-star star"/>

  //function to provide rating
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
    <article id="Card" data-testid='item'>
        <div className="img-container">
          <img src={profilePicture} alt='user_image' className='image-style' height='120px' width='120px'/>
        </div>
        <h4 className='name'>{nam.length>15?nam.slice(0,15):nam}</h4>
        <strong className='rating '>{rtg===0?'':rtg.toFixed(1)}  {handleRating(rtg)}</strong>
        <p className='reviews '>{reviewCount} <span className="count">Reviews</span> </p>
        <small>Description: {FixedDesc.length>15?FixedDesc.slice(0,10):FixedDesc}...</small>
        <hr/>
        <i className="fa-solid fa-location-dot"></i> <span className="num-id">{loc.slice(0,3)}</span>: <span className="color"> {userCode}</span>
        <span className="num-id side">{regis.slice(0,3)}</span>: <span className="color">{regis.slice(5)}</span>
        <button className='contact-button' onClick={()=>alert(nam + ' will contact you soon. Thanks👍')}>Contact</button>
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