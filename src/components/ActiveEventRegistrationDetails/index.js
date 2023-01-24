import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {displayEventStatus} = props

  const registrationStatusConstant = {
    initial: 'INITIAL',
    open: 'YET_TO_REGISTER',
    alreadyDone: 'REGISTERED',
    closed: 'REGISTRATIONS_CLOSED',
  }

  console.log(displayEventStatus)

  const renderInitialView = () => (
    <p className="initial-head">
      Click on an event, to view its registration details
    </p>
  )

  const renderRegistrationOpenView = () => (
    <div className="con">
      <img
        alt="yet to register"
        className="open-img"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
      />
      <p className="para">
        A live performance brings so much to your relationship with dance seeing
        dance live can often make you fall totally in love with this beautiful
        art form
      </p>
      <button className="open-Btn">Register Here</button>
    </div>
  )

  const renderRegistrationClosedView = () => (
    <div className="con">
      <img
        alt="registrations closed"
        className="open-img"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
      />
      <h1 className="closed-head">Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen</p>
      <p className="para">the Registrations Soon</p>
    </div>
  )

  const renderAlreadyRegisteredView = () => (
    <div className="con">
      <img
        alt="registered"
        className="done-img"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
      />
      <h1 className="closed-head">You have already registered for the event</h1>
    </div>
  )

  const renderDisplayView = () => {
    switch (displayEventStatus) {
      case registrationStatusConstant.initial:
        return renderInitialView()
      case registrationStatusConstant.open:
        return renderRegistrationOpenView()
      case registrationStatusConstant.closed:
        return renderRegistrationClosedView()
      case registrationStatusConstant.alreadyDone:
        return renderAlreadyRegisteredView()
      default:
        return null
    }
  }

  return <div>{renderDisplayView()}</div>
}

export default ActiveEventRegistrationDetails
