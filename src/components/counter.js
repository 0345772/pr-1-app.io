import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

const Counter = ({counter, inc, dec, res}) => {
  return (
    <div className="box">
      <div className="wrapper-block">
        <div className="content-wrap">
          <h1>{counter}</h1>
        </div>
        <div className="btn-block">            
          <button onClick={dec} type="button" className="btn btn-dec"><h2>-</h2></button>
          <button onClick={inc} type="button" className="btn-inc "><h2>+</h2></button>
          <button onClick={res} type="button" className="btn btn-res">reset</button>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    counter: state
  }
}
 
export default connect(mapStateToProps, actions)(Counter); 