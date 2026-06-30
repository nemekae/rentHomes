import './Property.css';
import { PropertyImage } from './PropertyImage/PropertyImage'
import { PropertyLabel } from './PropertyImage/PropertyImage'

export const Property = ({
    image,
    bedrooms,
    bathrooms,
    rent,
    address,
    surface,
    available,
    date,
    type,
}) => {
  return (
    <div className='property-card' style={{opacity: !available ? "0.5" : '1'}}>
        <PropertyImage image={image}>
            <PropertyLabel type={type} />
            <PropertyImage />
            <div>Property Attributes.</div>
        </PropertyImage>
        
    </div>
  )
}
