function Items({name, reviews, desc, image, location, crn}) {
  const imgStyle={
    borderRadius:'50%'
  }
  return (
    <article className="Card">
        <div className="img-container">
          <img src={image} alt='user_image' style={imgStyle} height='120px' width='120px'/>
        </div>
        <h3 className='name'>{name}</h3>
        <h4 className='reviews'>{reviews} Reviews</h4>
        <p className='desc'>Description: {desc}</p>
        <hr/>
        <p className='location'><i className="fa-light fa-location-dot" /> {location} & {crn}</p>
        <button className='search-button'>Contact</button>
      </article>
  )
}

export default Items