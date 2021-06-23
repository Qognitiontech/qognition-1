import React, { Fragment } from 'react';

const NotFound = () => {
  return (
    <Fragment>
    <img src="http://vignette3.wikia.nocookie.net/clashofclans/images/3/30/NYAN_CAT.gif/revision/latest?cb=20150415221840" width="70%"></img>
    <div class="text-wrapper">

    <div class="subtitle" data-content="You have come to the wrong place. Go back from the shadow!">
    You're probably not looking for Nyan Cat. Or are you?
    </div>

    <div class="buttons">
        <a class="button" href="http://localhost:3000/dashboard">Go to homepage</a>
    </div>
    </div>
        
    </Fragment>
  );
};

export default NotFound;
