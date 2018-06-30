import React from 'react';

import { Form, Label, Input, FormGroup } from 'reactstrap';

export default () => {
  return (
    <Form action="https://us-central1-woodlandstech-invite.cloudfunctions.net/generateInvite" method="POST">
      <FormGroup>
        <Label for="email">Email</Label>
        <Input required type="email" name="email" id="email" placeholder="name@example.com" />
        <button type="submit" className="btn btn-primary mt-1">
          Receive a Slack invite
        </button>
        <a className="btn btn-link" href="https://woodlandstech.slack.com">Already a member?</a>
      </FormGroup>
    </Form>
  )
}