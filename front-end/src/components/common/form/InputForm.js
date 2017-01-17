/**
 * Created by cthanh on 05/09/2016.
 */
import React from 'react';
export default (field) =>   // Define stateless component to render input and errors
  <div  className={field.meta.touched && field.meta.error  && `has-error`}>
    <input {...field.input} id={field.id} className="form-control" placeholder={field.placeHolder} type={field.type ? field.type : 'text'} style={field.style}/>
    <div className="state-error-wrapper">
      {field.meta.touched && field.meta.error && <div className="state-error-message">{field.meta.error}</div>}
    </div>
  </div>
