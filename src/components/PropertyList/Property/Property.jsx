import './Property.css';
import { PropertyImage } from './PropertyImage/PropertyImage'
import { PropertyLabel } from './PropertyImage/PropertyLabel/PropertyLabel'
import { PropertyBanner } from './PropertyImage/PropertyBanner/PropertyBanner'
import { IconText } from './PropertyImage/IconText/IconText'
import { Bath, Bed, Maximize } from 'lucide-react'
import { PropertyAttribute } from './PropertyAttribute/PropertyAttribute'

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
            {!available && <PropertyBanner />}
            
            <div className='property-info'>
              <IconText Icon={Bed} text={bedrooms} />
              <span>|</span>
              <IconText Icon={Bath} text={bathrooms} />
              <span>|</span>
              <IconText Icon={Maximize} text={`${surface} m²`} />
            </div>
        </PropertyImage>

        <PropertyAttribute text={address} />
        <PropertyAttribute text={`£${rent} / month`} color="#2CDEB6" bold="" />
        <PropertyAttribute text={`Available from: ${date}`} />

    </div>
  )
}
