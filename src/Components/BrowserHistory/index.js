import {Component} from 'react'
import HistoryItem from '../HistoryItem'
import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class BrowserHistory extends Component {
  state = {searchInput: '', historyListItems: initialHistoryList, isShow: false}

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteItem = id => {
    const {historyListItems} = this.state
    const filteredHistoryList = historyListItems.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({historyListItems: filteredHistoryList})

    if (historyListItems.length === 1) {
      this.setState({isShow: true})
    }
  }

  render() {
    const {searchInput, historyListItems, isShow} = this.state
    const searchResultsList = historyListItems.filter(
      eachItem =>
        eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
      <p className="error">There is no history to show</p>,
    )

    return (
      <div className="app-container">
        <div className="main-container">
          <div className="history-search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="history-logo"
            />
            <div className="search-container">
              <div className="logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                  alt="search"
                  className="search-logo "
                />
              </div>
              <input
                type="search"
                placeholder="Search History"
                className="search-element"
                onChange={this.onSearch}
                value={searchInput}
              />
            </div>
          </div>
        </div>
        <div className="bottom-app-container ">
          <ul className="items-container">
            {isShow ? (
              <p className="error">There is no history to show</p>
            ) : (
              searchResultsList.map(eachItem => (
                <HistoryItem
                  historyList={eachItem}
                  onDeleteItem={this.onDeleteItem}
                  key={eachItem.id}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}
export default BrowserHistory
