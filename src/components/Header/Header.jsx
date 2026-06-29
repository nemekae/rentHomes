import './Header.css'
import { House, Phone, Mail } from 'lucide-react';

export const Header = () => {
  return (
    <header className="header">
      <div className='item brand'>
        <House className='icon'/>
        <span>Nwachukwu's Homes</span>
      </div>

      <div className='item'>
        <Phone className='icon'/>
        <span>(+44) 907-4869-814</span>
      </div>

       <div className='item contact'>
        <Mail className='icon'/>
        <span>admin@rentnwachukwus.ai</span>
      </div>

    </header>
  )
}
