import './PropertyList.css';
import { Property } from './Property/Property'

export const PropertyList = ({ properties }) => {
  return (
    <div className='property-list'>
      {
        properties.map((property) => (<Property key={property.id} {...property}/>))
      }
    </div>
  )
}
