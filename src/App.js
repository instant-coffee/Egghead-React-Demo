import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      text: 'This is state text'
    }
  }

  update (e) {this.setState({text: e.target.value})}
  render() {
    return (
      
      <div>
        <Widget update={this.update.bind(this)} /> 
        <h1>{this.state.text}</h1>
      </div>
    )
  }
}

App.propTypes = {
  text: React.PropTypes.string
}

App.defaultProps = {
  text: "blah"
}

// StateLess function component
const Widget = (props) => 
  <input type="text" onChange={props.update} /> 

export default App