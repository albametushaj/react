import React, {Component} from "react";
import {reduxForm} from "redux-form";
import NewProductForm from "./NewProductForm";
import NewProductFormReview from "./NewProductFormReview";
class NewProduct extends Component{
    state = {showFormReview: false}

    renderContent(){
        if (this.state.showFormReview){
            return <NewProductFormReview onCancel={()=>this.setState({showFormReview: false})}/>;
        }
        return <NewProductForm
            onNewProductSubmit={()=>this.setState({showFormReview: true})}/>;
    }
    render() {
        return(
            <div>
                {this.renderContent()}
            </div>
        )
    }
}
/*
reduxForm here allows us to clear the data from the form.
That's why we call it here. We tell it, if we are rendering the form again,
clear its data from its former usage.
 */

export default reduxForm({
    form: 'newProductForm'
})(NewProduct);