import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchProducts} from "../../actions";
import {Link} from "react-router-dom";

class ProductList extends Component{
    componentDidMount() {
        this.props.fetchProducts();
    }
    renderProducts(){
        return this.props.products.map(product=>{
            return(
                <div className="card" key={product._id}>
                    <div className="card-content">
                      <span className="card-title">
                          {product.name}
                      </span>
                        <p>
                            {product.description}
                        </p>
                    </div>
                </div>
            );
        })
    }

    render(){
        return(
            <div>
                {this.renderProducts()}
                <Link to="/admin/products/new" style={{borderRadius:50+'%', width:40+'px', height:40+'px', left:93+'%', bottom:2+'%'}} className="btn btn-dark fixed-bottom">
                    +
                </Link>
            </div>
        )
    }
}

function mapStateToProps({auth, products}){
    return {auth, products};
}

export default connect(mapStateToProps, {fetchProducts})(ProductList);