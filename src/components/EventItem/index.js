import './index.css'

// Sai Tej's Code

const EventItem = props => {
  const {eventDetails, exportEventId, isActive} = props
  const {id, imageUrl, name, location, registrationStatus} = eventDetails

  const onClickEventImg = () => {
    exportEventId(registrationStatus, id)
    // console.log(id)
  }

  const selectedEventStyle = isActive && 'highlightBorder'

  return (
    <div className="list-items">
      <li>
        <button onClick={onClickEventImg} type="button" className="eventBtn">
          <img
            className={`img-size ${selectedEventStyle}`}
            alt="event"
            src={imageUrl}
          />
        </button>
        <p>{name}</p>
        <p>{location}</p>
      </li>
    </div>
  )
}

export default EventItem
