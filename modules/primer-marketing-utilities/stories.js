import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Marketing utilities', module)
  .add('Y directional margin', () => (
    <div>
      <div className="d-inline-block mr-6">
        <div className="d-inline-block mt-7 bg-blue-light">.mt-7</div>
      </div>
      <div className="d-inline-block mr-6">
        <div className="d-inline-block mb-7 bg-blue-light">.mb-7</div>
      </div>
      <div className="d-inline-block mr-6">
        <div className="d-inline-block my-7 bg-blue-light">.my-7</div>
      </div>
    </div>
  ))
  .add('Y directional responsive margin', () => (
    <div>
      <div className="d-inline-block mr-6">
        <div className="d-inline-block mt-sm-7 bg-blue-light">.mt-sm-7</div>
      </div>
      <div className="d-inline-block mr-6">
        <div className="d-inline-block mb-md-7 bg-blue-light">.mb-md-7</div>
      </div>
      <div className="d-inline-block mr-6">
        <div className="d-inline-block my-lg-7 bg-blue-light">.my-lg-7</div>
      </div>
    </div>
  ))
  .add('Y directional padding', () => (
    <div>
      <div className="d-inline-block mr-6">
        <div className="d-inline-block pt-7 bg-blue-light">.pt-7</div>
      </div>
      <div className="d-inline-block mr-6">
        <div className="d-inline-block pb-7 bg-blue-light">.pb-7</div>
      </div>
      <div className="d-inline-block mr-6">
        <div className="d-inline-block py-7 bg-blue-light">.py-7</div>
      </div>
    </div>
  ))
  .add('Y directional responsive padding', () => (
    <div>
      <div className="d-inline-block mr-6">
        <div className="d-inline-block pt-sm-7 bg-blue-light">.pt-sm-7</div>
      </div>
      <div className="d-inline-block mr-6">
        <div className="d-inline-block pb-md-7 bg-blue-light">.pb-md-7</div>
      </div>
      <div className="d-inline-block mr-6">
        <div className="d-inline-block py-lg-7 bg-blue-light">.py-lg-7</div>
      </div>
    </div>
  ))
