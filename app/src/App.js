
import React from 'react';
import Fixtures from "./component/fixtures";
import injectContext from "./store/appContext";


export  const App =()=>{
  return(
      <Fixtures/>
  )
}


export default injectContext(App);
