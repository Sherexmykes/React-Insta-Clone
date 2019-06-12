import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostContainer from './PostContainer/PostContainer';
import CommentSection from './CommentSection/CommentSection';

function App() {

class App extends React.Component {
  constructor (){
    super();
    this.state={
      data: dummyData,

    }
  }
}
render(){
  return (
    <div className="App">
      <PostContainer data={this.state.data}/>
       <CommentSection />
    </div>
  );
}
}

export default App;
