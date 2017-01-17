/**
 * Created by cthanh on 05/09/2016.
 */
import React from 'react';
export default (field) => {   // Define stateless component to render input and errors
  const items = field.items || [];
  return (<div>
    <select {...field.input} id={field.id} className="input-control" placeholder={field.placeHolder} style={field.style || {}}>
      {
        items
      }
    </select>
    <div className="state-error-wrapper">
      {field.meta.touched && field.meta.error && <div className="state-error-message">{field.meta.error}</div>}
    </div>
  </div>)
}
