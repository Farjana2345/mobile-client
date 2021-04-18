import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import AddService from './components/AddService/AddService';
import MakeAdmin from './components/AddService/MakeAdmin/MakeAdmin';
import { createContext, useState } from 'react';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import GetBooking from './components/GetBooking/GetBooking';
import Review from './components/Review/Review';
import BookList from './components/BookList/BookList';
import ManageServices from './components/ManageServices/ManageServices'
import OrderList from './components/OrderList/OrderList';
import Books from './components/Books/Books';
import Navbar from './components/Home/Navbar/Navbar';
import NotMatched from './components/NotMatched/NotMatched'
import ServicesAll from './components/Home/ServiceAll/ServiceAll';
import ReviewsAll from './components/Home/ReviewsAll/ReviewsAll';

export const UserContext = createContext();
function App() {
  const[loggedInUser,setLoggedInUser]=useState({});
  return (
    <UserContext.Provider value ={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path ="/">
          <Home></Home>
        </Route>
        <Route path ="/home">
          <Home></Home>
        </Route>
        <Route path ="/services">
         <ServicesAll></ServicesAll>
        </Route>
        <Route path ="/reviews">
         <ReviewsAll></ReviewsAll>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/review">
          <Review></Review>
        </Route>
        <Route path="/orderlist">
          <OrderList></OrderList>
        </Route>
        <Route path="/BookList">
          <BookList></BookList>
        </Route>
        <Route path="/book">
          <GetBooking></GetBooking>
        </Route>
        <Route path="/addservice">
          <AddService></AddService>
        </Route>
        <PrivateRoute path="/admin">
        <GetBooking></GetBooking>
        </PrivateRoute>
        <PrivateRoute path="/service/:_id">
         <GetBooking></GetBooking>
        </PrivateRoute>
        <Route path="/makeadmin">
         <MakeAdmin></MakeAdmin>
        </Route>
        <Route path="/manageservice">
         <ManageServices></ManageServices>
        </Route>
        <Route path="*">
        <Navbar></Navbar>
        <NotMatched></NotMatched>
        </Route>
      </Switch>
    </Router>
  </UserContext.Provider>  
  );
}

export default App;
