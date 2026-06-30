import "./PropertyImage.css";

export const PropertyImage = ({image, children}) => {
  return (
    <div style={{backgroundImage: `url(${image})`}} className='property-image'>
        {children}
    </div>
  )
}
