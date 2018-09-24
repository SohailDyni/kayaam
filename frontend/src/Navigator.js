import React, { Component } from 'react';
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';

// import { Provider, connect } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";

// import {auth} from "./actions";
// import ponyApp from "./reducers";

// import Home from 'screens/Home';
// import {RoomDetail, Home, RoomsListing} from 'screens';
// import RoomsListing from "screens/rooms/listings/RoomsListing"
// import RoomDetail from "screens/rooms/detail/RoomDetail"

// import BookingPage from "./screens/booking/BookingPage"

import AddRoomPage from "screens/rooms/add-room/AddRoom"

// import PonyNote from "./components/PonyNote";
// import NotFound from "./components/NotFound";
// import Register from "./components/Register";
// import Login from "./components/Login";

// let store = createStore(ponyApp, applyMiddleware(thunk));

export default class Navigator extends Component {

    // componentDidMount() {
    //     this.props.loadUser();
    // }

    PrivateRoute = ({component: ChildComponent, ...rest}) => {
        return <Route {...rest} render={props => {
            if (this.props.auth.isLoading) {
                return <em>Loading...</em>;
            } else if (!this.props.auth.isAuthenticated) {
                return <Redirect to="/login" />;
            } else {
                return <ChildComponent {...props} />
            }
        }} />
    }

    render() {
        let {PrivateRoute} = this;
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={AddRoomPage} />
                    {/* <PrivateRoute exact path="/" component={PonyNote} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route component={NotFound} /> */}
                </Switch>
            </BrowserRouter>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         auth: state.auth,
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         loadUser: () => {
//             return dispatch(auth.loadUser());
//         }
//     }
// }

// let RootContainer = connect(mapStateToProps, mapDispatchToProps)(RootContainerComponent);

// export default class App extends Component {
//     render() {
//         return (
//             <Provider store={store}>
//                 <RootContainer />
//             </Provider>
//         )
//     }
// }