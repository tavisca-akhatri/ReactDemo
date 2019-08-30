import React,{Component} from 'react';
import './App.css';
import LeftBar from './FullName/LeftBar';
import RightBar from './FullName/RightBar';

class App extends Component{
constructor(props){
  super(props);
  this.state = {
    data :[{
       FirstName :"Akshit",
       LastName :"Khatri"
    },{
        FirstName : "Hello",
        LastName : "World"
    },{
        FirstName : "ABC",
        LastName : "DEF"
    }] ,
    index:null,
    }
    this.setNewIndex = this.setNewIndex.bind(this)
    this.setNewContent=this.setNewContent.bind(this)
}

setNewIndex = (index)=>{
     this.setState({
       index:index
    })
    console.log(index)
}

setNewContent= (index,fname,lname) => {
    this.setState( (prevState) => {
     const d = prevState.data.map((dataPoint, iIndex)=>{
    // console.log(dataPoint,iIndex);
      if(index == iIndex){
         dataPoint.FirstName = fname;
         dataPoint.LastName = lname;
      }
     return dataPoint
     });
     return {data:d,
     index:prevState.index
     }
  })
}

render(){
return( <div className="App">
     <LeftBar /*update = {this.update.bind(this)}*/ data={this.state.data} newIndex={this.setNewIndex} ></LeftBar>
     <RightBar data={this.state.data} index={this.state.index} newContent={this.setNewContent} ></RightBar>
     </div>
     );
  }
}
    

export default App;
