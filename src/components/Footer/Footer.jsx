import './Footer.css';
import { Clock } from 'lucide-react'


export const Footer = () => {
  //Define the agency opening & closing hours
  const openTime = 9;
  const closingTime = 17;
  //Get the current date and time
  const dateTime = new Date()
  // Extract the hours of the day between 0 - 23
  const timeNow = dateTime.getHours();
  // Extract the days of the week (0 = Sunday, 6=Saturday)
  const currentDay = dateTime.getDay();
  // Check for the day of the week: Monday to Friday
  const isWeekday = currentDay >= 1 && currentDay <= 5;
  // Check if the weekday is open and within operating hours
  const isOpen = isWeekday && timeNow >= openTime && timeNow < closingTime

  //Define the JSX to show when agency is open
  const agencyOpen = (
    <>
      {/* Flex container for the "open" status message */}
      <div className='message'>
        {/* Display the Clock icon */}
        <Clock className='icon'/>
        <span className='status open'>We are open now!</span>
      </div>
      {/* Display the contact information */}
      <span>Call us at: <strong>+44 9074-869-814</strong></span>
      <div>

      </div>
    </>
  )

  const agencyClosed = (
    <>
      {/* Flex container for the "closed" status message */}
      <div className='message'>
        <Clock />
        <span className='status closed'>We are now closed!</span>
      </div>
      {/* Display the agency opening hours */}
      <div style={{ marginTop: "0.5rem" }}>
        Opening hours: Monday to Friday, {openTime}am to {closingTime}pm.
      </div>
    </>
  )
  return (
    <footer className="footer">
      {isOpen ? agencyOpen : agencyClosed}
    </footer>
  )
}
