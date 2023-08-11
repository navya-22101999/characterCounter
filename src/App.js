import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

// Replace your code here
class App extends Component {
  state = {searchInput: '', wordsList: []}

  one = event => {
    this.setState({searchInput: event.target.value})
  }

  start = event => {
    event.preventDefault()
    const {searchInput} = this.state
    const newText = {
      id: uuidv4(),
      item: searchInput,
    }
    this.setState(prevState => ({
      wordsList: [...prevState.wordsList, newText],
      searchInput: '',
    }))
  }

  render() {
    const {searchInput, wordsList} = this.state

    return (
      <div className="main-container">
        <div className="mini-container-1">
          <h1 className="heading">Count the characters like a Boss</h1>

          <div className="container">
            {wordsList.length > 0 ? (
              <ul className="list-container">
                {wordsList.map(each => (
                  <li key={each.id}>
                    <p key={each.id} className="list-elements">
                      {each.item}: {each.item.length}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="image-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  className="image"
                  alt="no user inputs"
                />
              </div>
            )}
          </div>
        </div>
        <div className="mini-container-2">
          <h1 className="header">Character Counter</h1>
          <div className="kr">
            <form onSubmit={this.start}>
              <div className="inp-con">
                <input
                  type="text"
                  className="input"
                  placeholder="Enter the characters here"
                  onChange={this.one}
                  value={searchInput}
                />
                <button className="button" type="submit" onClick={this.start}>
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
