import React, { Component } from 'react';


 class Test extends Component {
  state={
    title:'',
    body:''
  }

  // Lifecycle methods
  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => this.setState({
        title: data.title,
        body: data.body
      }))
      

    // console.log('componentDidMount...');
  }
  // componentWillMount() { //Depricated
  //   console.log('componentWillMount...');
  // }
  // componentDidUpdate() {
  //   console.log('componentDidUpdate...');
  // }
  // componentWillUpdate() {//Depricated
  //   console.log('componentWillUpdate...');
  // }
  // componentWillReceiveProps(nextProps, nextState){//Depricated
  //   console.log('componentWillReceiveProps...')
  // }
  // static getDerivedStateFromProps(nextProps, prevState){ // must use return, cannot use setState
  //   return null;
  // }
  // getSnapshotBeforeUpdate(prevProps, prevstate){

  // }
  
  render() {
    const{ title, body } = this.state
    return (
      <div>
        <h1>Test Component</h1>
        <p>{title}</p>
        <p>{body}</p>
      </div>
    )
  }
}

export default Test;