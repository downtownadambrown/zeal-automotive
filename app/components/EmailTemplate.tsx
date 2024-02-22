import * as React from 'react';
import { EmailPayload } from '../api/send/route';

export const EmailTemplate: React.FC<Readonly<EmailPayload>> = ({
  name,
  email,
  phone,
  make,
  model,
  mileage,
  info,
}): JSX.Element => (
  <div>
    <h1>Welcome, {name}!</h1>
  </div>
);