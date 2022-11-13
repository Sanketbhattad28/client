import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends Component {
  renderError({ error, touched }) {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div className="header">{error} </div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    //const className = `feild ${meta.error && meta.touched ? "error" : " "}`;
    return (
      <div className="feild">
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter title" />
        <br />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
        />
        <br />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (fomrValues) => {
  const error = {};

  if (!fomrValues.title) {
    error.title = "Please enter a valid title";
  }
  if (!fomrValues.description) {
    error.description = "Please enter a valid description";
  }
  return error;
};

export default reduxForm({
  form: "streamform",
  validate,
})(StreamForm);
