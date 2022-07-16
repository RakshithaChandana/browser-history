import './index.css'

const HistoryItem = props => {
  const {historyList, onDeleteItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyList
  const onDelete = () => {
    onDeleteItem(id)
  }

  return (
    <li className="history-items-container">
      <p className="time">{timeAccessed}</p>
      <div className="title-and-image">
        <img src={logoUrl} alt="domain logo" className="image" />
        <div className="title-and-url">
          <p className="title">{title}</p>
          <p className="url">{domainUrl}</p>
        </div>
        <button
          type="button"
          className="button-image"
          testid="delete"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItem
