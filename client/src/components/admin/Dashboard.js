import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchProducts} from "../../actions";
import {Link} from "react-router-dom";
class Dashboard extends Component{
    componentDidMount() {
        this.props.fetchProducts();
    }
    renderProducts() {
        console.log(this.props)
        return <div>This is admin dashboard</div>
    }

    render(){
        return(
            <div>
                {this.renderProducts()}
                <Link to={"/admin/products"}>Products</Link>
            </div>
        )
    }
}

function mapStateToProps({auth}){
    return {auth};
}

export default connect(mapStateToProps, {fetchProducts})(Dashboard);