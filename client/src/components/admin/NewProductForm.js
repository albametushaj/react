// SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, {Component} from "react";
import {reduxForm, Field} from "redux-form";
import {Link} from "react-router-dom";
import validateEmails from "../../utils/validateEmails";
/*
The reduxForm helper can be thought as being
nearly identical to the 'connect' helper
that we've been using from the
React Redux Library.
The reduxForm function allows our component to
communicate with the Redux store at the top
of our application, that is enclosed by the 'Provider'
tag that we set up in the beginning

The reduxForm function is so similar to the
'connect' function in fact, that it is wired
up to our component with the same method signature
 */


class NewProductForm extends Component{
    renderFields(){
        // return _.map(formFields, ({label, name}) =>{
        //     return (
        //         <Field key={name} component={SurveyField} type="text" label={label} name={name}/>
        //     );
        // });

        return([
            <div>
                <label>Name</label>
                <input type="text"/>
            </div>,
            <div>
                <label>Description</label>
                <input type="text"/>
            </div>,
            <div>
                <label>Price</label>
                <input type="number"/>
            </div>,
            <div>
                <label>Quantity</label>
                <input type="number"/>
            </div>
        ])
    }
    render() {
        return(
            <form
                style={{marginLeft:10+'px', marginRight:10+'px'}}
                onSubmit={this.props.handleSubmit(this.props.onNewProductSubmit)}>
                {this.renderFields()}
                <Link to="/products" className="btn btn-danger">
                    Cancel
                </Link>
                <button className="btn btn-success" type="submit">Submit</button>
            </form>
        )
    }
}

/*
If reduxForm gets the errors object back,
and it is empty, the reduxForm will assume
that the entire form is valid and
everything is ready to go.
If the error object has any properties or values
inside of it, then reduxForm will see
those properties and values and will assume
that the form values must be invalid and so
it will stop the submission process.
 */
function validate(values){
    const errors={};
    errors.recipients = validateEmails(values.recipients || '');

    // _.each(formFields, ({name})=>{
        // if (!values.title){
        if (!values['name']){
            errors['name']=`You must provide a value for the name field`
        }
    // });

    return errors;
}


/* reduxForm takes 1 single argument that
contains a couple of different options that
we will use to customize how our form behaves

The reduxForm helper only requires 1 option
to be passed inside this object,
the 'form' option
*/

/*
If we pass in a function name to the
'validate' key here,
that function will be used to
validate the input of the form.
That function will be automatically ran
any time the user tries
 to submit the form
 */

/*
destroyOnUnmount: false => so the form data will not be deleted
when you go from the form to the form review and vice versa.
 */
export  default reduxForm({
    validate,
    form: 'newProductForm',
    destroyOnUnmount: false
})(NewProductForm);