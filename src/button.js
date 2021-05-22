import React from 'react';
import { useHistory } from 'react-router-dom';

function Button (){
  const history = useHistory();
   
  return (
    <button onClick={() => history.push('/jokes')}>
      next joke
    </button>
  );
};
export default Button;