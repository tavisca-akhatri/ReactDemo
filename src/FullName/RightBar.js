import React,{Component} from 'react';
import './LeftBar.css';

class RightBar extends Component{

constructor(props){
  super(props);
  this.index = null;
  this.state={
    firstName:"",
    lastName:""
  }
}

updateFirstName(firstName){
  this.setState({
   firstName:firstName
   })
   //console.log(firstName)
}

updateLastName(lastName){
  this.setState({
    lastName:lastName
  })
}

showButtons(){
if(this.props.index != null){
if(this.index == null || this.index != this.props.index){
this.setState({
    firstName: this.props.data[this.props.index].FirstName,
    lastName: this.props.data[this.props.index].LastName
})

    this.index = this.props.index;
}
return (
  <center><li>
      <input type = "text" onChange = {(e) => this.updateFirstName(e.target.value)} value = {this.state.firstName} />
      <input type = "text" onChange = {(e) => this.updateLastName(e.target.value)} value= {this.state.lastName} />
      <button id={this.props.index} onClick={() => {this.props.newContent(this.index,this.state.firstName,this.state.lastName)}}>update</button>
  </li></center>
   )
 }
 else{
    return null
  }
 }

render(){
    return(
     <div className="Rightbar">
     <ul id="right">{this.showButtons()}</ul>
     </div>
     );
}
}

export default RightBar;