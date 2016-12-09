import React, { Component, PropTypes } from 'react'
// import { Button, FormControl, FormGroup } from 'react-bootstrap'

class Search extends Component {
  constructor(){
    super()
    this.state = { searchTerm: '' }
  }

  handleChange(e){
    this.setState({searchTerm: e.target.value})
    this.props.handleSearchTerm(e.target.value)
  }

  render(){
    return (
      <div className="search-component">
        <label htmlFor="search">Search:</label>
        <input type="text" name="searchTerm"
          value={this.state.searchTerm}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    )
  }
}

Search.propTypes = {
  events: PropTypes.array
  // handleSearchTerm: PropTypes.function
}

export default Search
