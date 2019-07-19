import { Auth } from 'aws-amplify';
import React from 'react';

import AuthComponent from './auth-component';

export default () => (
  <AuthComponent
    onClick={() => Auth.federatedSignIn({ provider: 'Facebook' })}
  />
);
