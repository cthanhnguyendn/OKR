/**
 * Created by W540 on 1/17/2017.
 */
import React,{Component,PropTypes} from 'react'
import ReactSelect from './ReactSelect'

export default class UserObjectiveSelect extends Component{
  getOptions(input, callback){
    setTimeout(function() {
      callback(null, {
        options: [
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' }
        ],
        // CAREFUL! Only set this to true when there are no more options,
        // or more specific queries will not be sent to the server.
        complete: true
      });
    }, 500);
  }
  render(){
    return (
      <ReactSelect.Async
        name="user-objective-select"
        loadOptions={this.getOptions}
      />
    )
  }
}
