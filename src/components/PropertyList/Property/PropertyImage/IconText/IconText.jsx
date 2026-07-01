import './IconText.css';


export const IconText = ({ Icon, text }) => {
  return (
    <span className='icon-text'>
        <Icon /> {" "}{text}
    </span>
  )
}
