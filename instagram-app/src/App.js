import React from 'react';
import './App.css';
import dummyData from './components/dummy-data';
import PostContainer from './components/PostContainer';
import CommentSection from './components/CommentSection';
import SearchBar from './components/SearchBar';



  class App extends React.Component {
    constructor(){
      super();
      this.state={
        data: dummyData,
      }
    }
 
    render() {
      return( <div className="App">
      <PostContainer data={this.state.data}/>
      <SearchBar />
      <CommentSection />
      
      </div>
  );
    }} 

 
export default App;
