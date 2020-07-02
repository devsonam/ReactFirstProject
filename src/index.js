import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
//import TopHeader from './Topmenu';
//import PageFooter from './Footer';
//import HomePage from './Home';
import './index.css';
import App from './App';
import MyFunction from './FunctionComp';
import MyClass from './ClassComp';
import MyFooter from './FooterClass';
import User from './UserList';
import UserList from './MultiArray';
import ManageState from './DataState';
import TopNav from './TopNav';
import Array1 from './Array1';
import ArrayTwo from './Array2';
import * as serviceWorker from './serviceWorker';
import Doctor from './Doctor';
import Company from './Company';
import CarInfo from './Car';
import Crud from './Api';
const componentData = (
  <HashRouter>
  <TopNav />
    <Route exact path = "/" component = {App}/>
    <Route exact path = "/user-list" component = {User}/>
    <Route exact path = "/state-management" component = {ManageState}/>
    <Route exact path = "/multi-user" component = {UserList}/>
    <Route exact path = "/array-one" component = {Array1}/>
    <Route exact path = "/array-two" component = {ArrayTwo}/>
    <Route exact path = "/manage-props" component = {Doctor}/>
    <Route exact path = "/company" component = {Company}/>
    <Route exact path = "/car-Info" component = {CarInfo}/>
    <Route exact path = "/crud" component = {Crud}/>
   <MyFooter />
  </HashRouter>
);
ReactDOM.render(componentData, document.getElementById('root'));

serviceWorker.unregister();
