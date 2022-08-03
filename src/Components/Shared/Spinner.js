import loader from '../Assets/Spinner.gif'

function Spinner() {
  return (
        <div className='d-flex align-items-center justify-content-center'>
          <img 
            src={loader} 
            alt='loading...'
            height={100}
            width={100}
          />
        </div>
  )
}

export default Spinner