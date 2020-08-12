import React, { Component } from "react";
import ReactDOM from "react-dom";
import logo from './abc.png';
import pic2 from './a.JPG';
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import "./styles.css";
import { Container, TimePicker } from "react-materialize";
class App extends Component {
constructor(props) {
super(props);
this.state = {
time1:"00:00 A.M",
time2:"00:00 A.M",
time3:"00:00 A.M",
time4:"00:00 A.M",
time5:"00:00 A.M",
time6:"00:00 A.M",
time7:"00:00 A.M",
time8:"00:00 A.M",
time9:"00:00 A.M",
time10:"00:00 A.M",
time11:"00:00 A.M",
time12:"00:00 A.M",
time13:"00:00 A.M",
time14:"00:00 A.M",
};
}
onChange1 = time1 => this.setState({ time1 })
onChange2 = time2 => this.setState({ time2 })
onChange3 = time3 => this.setState({ time3 })
onChange4 = time4 => this.setState({ time4 })
onChange5 = time5 => this.setState({ time5 })
onChange6 = time6 => this.setState({ time6 })
onChange7 = time7 => this.setState({ time7 })
onChange8 = time8 => this.setState({ time8 })
onChange9 = time9 => this.setState({ time9 })
onChange10 = time10 => this.setState({ time10 })
onChange11 = time11 => this.setState({ time11 })
onChange12 = time12 => this.setState({ time12 })
onChange13 = time13 => this.setState({ time13 })
onChange14 = time14 => this.setState({ time14 })
render() {
return (
<div class="container-fluid">
   <div class="container-fluid logo">
    <img src={pic2} />
   </div>
   <p class="maintext center-align">Set your Availability<br/></p>
   <div className="row sidepicture">
      <div className="col l5 s12"><img src={logo}  /></div>
      <div className="col l7 s12">
         <div className="box center-align">
            <p>
               <i class="fa fa-calendar" aria-hidden="true"></i><br/>
               Sunday
            </p>
            <div class="row">
               <div class="col l6 s6">
                  <TimePicker className="box1" placeholder={this.state.time1}
                     onChange={this.onChange1}
                     value1={this.state.time1}
                     >Start</TimePicker>
               </div>
               <div class="col l6 s6">
                  <TimePicker className="box1" placeholder={this.state.time2}
                     onChange={this.onChange2}
                     value2={this.state.time2}
                     >End</TimePicker>
               </div>
            </div>
         </div>
         <div className="box center-align">
            <p>
               <i class="fa fa-calendar" aria-hidden="true"></i><br/>
               Monday
            </p>
            <div class="row">
               <div class="col l6 s6">
                  <TimePicker className="box1" placeholder={this.state.time3}
                     onChange={this.onChange3}
                     value3={this.state.time3}
                     >Start</TimePicker>
               </div>
               <div class="col l6 s6">
                  <TimePicker className="box1" placeholder={this.state.time4}
                     onChange={this.onChange4}
                     value4={this.state.time4}
                     >End</TimePicker>
               </div>
            </div>
         </div>
         <div className="box center-align">
            <p>
               <i class="fa fa-calendar" aria-hidden="true"></i><br/>
               Tuesday
            </p>
            <div class="row">
               <div class="col l6 s6">
                  <TimePicker className="box1" placeholder={this.state.time5}
                     onChange={this.onChange5}
                     value5={this.state.time5}
                     >Start</TimePicker>
               </div>
               <div class="col l6 s6">
                  <TimePicker className="box1" placeholder={this.state.time6}
                     onChange={this.onChange6}
                     value6={this.state.time6}
                     >End</TimePicker>
               </div>
            </div>
         </div>
         <div className="box center-align">
            <p>
               <i class="fa fa-calendar" aria-hidden="true"></i><br/>
               Wednesday
            </p>
            <div class="row">
               <div class="col l6 s6">
                  <TimePicker className="box1" placeholder={this.state.time7}
                     onChange={this.onChange7}
                     value7={this.state.time7}
                     >Start</TimePicker>
               </div>
               <div class="col l6 s6">
                  <TimePicker className="box1" placeholder={this.state.time8}
                     onChange={this.onChange8}
                     value8={this.state.time8}
                     >End</TimePicker>
               </div>
            </div>
         </div>
         <div className="box center-align">
            <p>
               <i class="fa fa-calendar" aria-hidden="true"></i><br/>
               Thursday
            </p>
            <div class="row">
               <div class="col l6 s6">
                  <TimePicker className="box1" placeholder={this.state.time9}
                     onChange={this.onChange9}
                     value9={this.state.time9}
                     >Start</TimePicker>
               </div>
               <div class="col l6 s6">
                  <TimePicker className="box1" placeholder={this.state.time10}
                     onChange={this.onChange10}
                     value10={this.state.time10}
                     >End</TimePicker>
               </div>
            </div>
         </div>
         <div className="box center-align">
            <p>
               <i class="fa fa-calendar" aria-hidden="true"></i><br/>
               Friday
            </p>
            <div class="row">
               <div class="col l6 s6">
                  <TimePicker className="box1" placeholder={this.state.time11}
                     onChange={this.onChange11}
                     value11={this.state.time11}
                     >Start</TimePicker>
               </div>
               <div class="col l6 s6">
                  <TimePicker className="box1" placeholder={this.state.time12}
                     onChange={this.onChange12}
                     value12={this.state.time12}
                     >End</TimePicker>
               </div>
            </div>
         </div>
         <div className="box center-align">
            <p>
               <i class="fa fa-calendar" aria-hidden="true"></i><br/>
               Saturday
            </p>
            <div class="row">
               <div class="col l6 s6">
                  <TimePicker className="box1" placeholder={this.state.time13}
                     onChange={this.onChange13}
                     value13={this.state.time13}
                     >Start</TimePicker>
               </div>
               <div class="col l6 s6">
                  <TimePicker className="box1" placeholder={this.state.time14}
                     onChange={this.onChange14}
                     value14={this.state.time14}
                     >End</TimePicker>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="container center">
      <button class="button button4">Save</button>
   </div>
   <br/>
   <div class="container-fluid">
      <footer class="page-footer">
         <div class="container ">
            <div class="row">
               <div class="col l12 s12 center">
                   <img src={pic2} />
               </div>
            </div>
            <div class=" center">
               <div class=" center a1">
                  About Us
               </div>
               <div class=" center b1">
                  Feedback
               </div>
               <div class=" center c1">
                  Help
               </div>
               <div class=" center d1">
                  Careers
               </div>
               <div class="center e1">
                Marketing
               </div>
               <div class=" center f1">
                Press
               </div>
            </div>
         </div>

            <div class="container center copyright">
               © 2020 Copyright All Rights Reserved
            </div>

      </footer>
   </div>
</div>
);
}
}
const rootElement = document.getElementById("root");
ReactDOM.render(
<App />
, rootElement);
