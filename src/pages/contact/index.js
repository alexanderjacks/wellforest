import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">

              <h1>Book An Appointment</h1>
              <p>
              We are located in Northeast Portland inside the lovely <strong>In Tune Integrative Wellness</strong>.
              </p>
              <img
                src='/img/static-map.png'
                className='mapbox'
              />
              <h4 className='extra-vertical-spacing'>
              Click the link below to schedule online or call the front desk,<br/>M-W 9am-4pm!
              </h4>
              <div className="columns">
                <div className="column is-6">
                  <a href='https://ehr.unifiedpractice.com/Public/OnlineBooking?ClinicUid=b4fb4194-05f1-4b95-a41c-9348b69778da'>
                  <button className='btn'>Booking Calendar
                  </button></a>
                </div>
                <div className="column is-6">
                  <h3>
                  <a href='tel:+19715447298'>(971) 544-7298</a>
                  </h3>
                  <p>Please note, my treatment room is located on the second floor and involves climbing steep stairs. Please contact me before making an appointment to let me know if stairs are a difficulty and I will accommodate with a treatment room on the first floor of the building, as space allows. Unfortunately at this time the clinic is not ADA accessible. 
                  </p>
                </div>
              </div>

              <h1>Questions? We Can Email You</h1>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    Your name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    Your email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    Your message
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="btn" type="submit">
                    Send
                  </button>
                </div>
              </form>

            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
