import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
// import Payments from "./Payments";
// connect - used to connect a component with th redux store

class Header extends Component{
    renderContent(){
        switch (this.props.auth){
            case null:
                return 'Still deciding'
            case false:
                return <a style={{fontSize:15+'px'}} className="navbar-brand" href="/auth/google/callback">Log in Google</a>
            default:
                if(this.props.auth.email==='albametushaj99@gmail.com'){
                    return [
                        <a key="4" className="navbar-brand" style={{fontSize:15+'px'}} href="#">Hello {this.props.auth.fullName}</a>,
                        <Link
                            key="5"
                            className="navbar-brand"
                            to={"/admin/dashboard"}>
                            Admin dashboard
                        </Link>,
                        <a key="3" className="navbar-brand" style={{fontSize:15+'px'}} href="/api/logout">Logout</a>
                    ];
                }
                else
                    return [
                // <a key="1" className="navbar-brand" style={{fontSize:15+'px'}}>
                //     Was a payment component{/*<Payments />*/}
                // </a>,
                <a key="4" className="navbar-brand" style={{fontSize:15+'px'}} href="#">Hello {this.props.auth.fullName}</a>,
                <a key="3" className="navbar-brand" style={{fontSize:15+'px'}} href="/api/logout">Logout</a>
            ];
        }
    }
    render(){
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                        {/*<Link*/}
                        {/*    className="navbar-brand"*/}
                        {/*    to={this.props.auth ? "/shoppingCart" : "/"}>*/}
                        {/*    E-commerce*/}
                        {/*</Link>*/}
                        {this.renderContent()}
                    </div>
                </nav>
            </div>);
    }
}
function mapStateToProps({auth}){
    // return {auth: state.auth}
    // console.log(state)
    return {auth};
}

export default connect(mapStateToProps)(Header);