import './styles/location.css'

const LocationInfo = ({ location }) => {

  return (
    <article>
      <h2 className="location_title">{location?.name}</h2>
      <ul className="location_ul">
        <li className='locarion_li'><span>Type</span><span className='locarion_span'>{location?.type}</span></li>
        <li className='locarion_li'><span>Dimension</span><span className='locarion_span'>{location?.dimension}</span></li>
        <li className='locarion_li'><span>Population</span><span className='locarion_span'>{location?.residents.length}</span></li>
      </ul>

    </article>
  )
}

export default LocationInfo