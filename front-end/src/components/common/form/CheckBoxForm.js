/**
 * Created by W540 on 1/6/2017.
 */
import React, {Component} from 'react'
export default (field) =>   // Define stateless component to render input and errors
  <div className="checkbox-control">
    <input type="checkbox" id={field.id} name="check"  checked={field.checked}/>
    <label for={field.id}></label>
  </div>
