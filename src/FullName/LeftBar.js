import React,{Component} from 'react';
import './LeftBar.css';

class LeftBar extends Component{

   constructor(props){
     super(props);
    // console.log(this.props.data)
     this.state={
        index:null
     }
  }

    clickHandler(index){
      this.props.newIndex(index)
      console.log(index)
     }


    dataPopulate(){
         return this.props.data.map((dataPoint, index) => {
            return <li><button type="submit" id={index} className="button1"
             onClick={()=>this.clickHandler(index)}>{dataPoint.FirstName + " " + dataPoint.LastName}</button></li>
        })
    }
render(){

   // console.log("THis si updated")
    return(
     <div className="Leftbar">
      <nav></nav>
     <div className="container left">
     <ul className="menu">
     {this.dataPopulate()}
     </ul>
     </div>
     </div>
      );
}
}
    

export default LeftBar;
