import React from 'react';

class App extends React.Component {

  render(){
    return <Title text="this"/>
  }
}

const Title = (props) => <h1>Title: {props.text}</h1>

Title.propTypes = {
  // text: React.PropTypes.string.isRequired
  text(props, propName, component){
    if(!(propName in props)){
      return new Error(`missing ${propName}`)
    }
    if (props[propName].length < 6 ) {
      return new Error(`${propName} is too short`)
    }
  }
} 

export default App