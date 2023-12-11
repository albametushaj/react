import _ from "lodash";
import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as actions from "../../actions";

const NewProductFormReview = ({onCancel, formValues, submitNewProduct, history})=>{
    // const reviewFields =_.map(formFields, ({name, label}) =>{
        const fields = [
            <div key="1">
                <label>Name</label>
                <div>{formValues['name']}</div>
            </div>,
            <div key="2">
                <label>Description</label>
                <div>{formValues['description']}</div>
            </div>,
            <div key="3">
                <label>Price</label>
                <div>{formValues['price']}</div>
            </div>,
            <div key="4">
                <label>Quantity</label>
                <div>{formValues['quantity']}</div>
            </div>];
    // })

    return (
        <div>
            <h5>Please confirm your entries</h5>
            <div>
                {fields}
            </div>
            <button className="btn btn-info" onClick={onCancel}>
                Cancel
            </button>
            <button onClick={()=>submitNewProduct(formValues, history)} className="btn btn-dark">
                Send Survey
            </button>
        </div>
    );
}
function mapStateToProps(state){
    console.log(state)
    return{formValues: state.form.newProductForm.values}
}
export default connect(mapStateToProps, actions)(withRouter(NewProductFormReview));