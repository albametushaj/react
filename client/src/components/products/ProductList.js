import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchProducts} from "../../actions";

class ProductList extends Component{
    componentDidMount() {
        this.props.fetchProducts();
    }
    renderProducts(){
        console.log(this.props.products)
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
            </div>
        )
    }
}

function mapStateToProps({products}){
    return {products};
}

export default connect(mapStateToProps, {fetchProducts})(ProductList);