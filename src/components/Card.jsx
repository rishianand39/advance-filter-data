import "./Card.css"
const Card = ({img,releaseOn, year, month}) => {
  return (
    <div className='card'>
        <div className='imgholder'>
            <img src={img} alt="" />
        </div>
        <div className='infoholder'>
            
                <div>Release On: <span>{releaseOn}</span></div>
                <div id="bottom">
                    <span>Year: {year}</span>
                    <span>Month: {month}</span>
                </div>
            
        </div>
    </div>
  )
}

export default Card