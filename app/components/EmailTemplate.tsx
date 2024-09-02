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
    <h3>Inquiry from ZealAutomotive.com</h3>
    <div>Name: {name}</div>
    <div>Email: {email}</div>
    <div>Phone Number: {phone}</div>
    <div>Vehicle: {make} {model}</div>
    <div>Mileage: {mileage}</div>
    <div>Additional Information: {info}</div>
  </div>
);