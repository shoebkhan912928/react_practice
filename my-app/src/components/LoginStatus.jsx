import React from 'react';

function LoginStatus({isLoggedIn}) {
  return (
    <div>
      <h2>Login Status</h2>
      {/* {isLoggedIn ? (
        <p>You are logged in.</p>
      ) : (
        <p>You are not logged in.</p>
      )} */}
      {isLoggedIn ? (
        <p>You are Logged in </p> ) : (
            <p> You are not Loggeed in no0e </p>
        )}
    </div>
  );
}

export default LoginStatus;