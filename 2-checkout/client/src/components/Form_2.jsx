import React from 'react';
import { form_0 } from '../requests.js';

// Components
import InputBox from './InputBox.jsx';

class Form_2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      line_1: '',
      line_2: '',
      city: '',
      state: '',
      zip_shipping: '',
      phone: ''
    }
  }

  componentDidMount() {
    form_0.getUser((err, user) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({
          line_1: user.line_1,
          line_2: user.line_2,
          city: user.city,
          state: user.state,
          zip_shipping: user.zip_shipping,
          phone: user.phone
        });
      }
    });
  }

  render() {
    const { callback } = this.props;

    const data = [
      {
        title: 'Line 1: ',
        placeholderName: 'Line 1',
        defaultVal: this.state.line_1,
        callback: (e) => this.setState({ line_1: e.target.value })
      },
      {
        title: 'Line 2: ',
        placeholderName: 'Line 2',
        defaultVal: this.state.line_2,
        callback: (e) => this.setState({ line_2: e.target.value })
      },
      {
        title: 'City: ',
        placeholderName: 'City',
        defaultVal: this.state.city,
        callback: (e) => this.setState({ city: e.target.value })
      },
      {
        title: 'State: ',
        placeholderName: 'State',
        defaultVal: this.state.state,
        callback: (e) => this.setState({ state: e.target.value })
      },
      {
        title: 'Zip: ',
        placeholderName: 'Zip',
        defaultVal: this.state.zip_shipping,
        callback: (e) => this.setState({ zip_shipping: e.target.value })
      },
      {
        title: 'Phone: ',
        placeholderName: 'Phone',
        defaultVal: this.state.phone,
        callback: (e) => this.setState({ phone: e.target.value })
      }
    ]

    return(
      <div>
        <h1>Form 2</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          const {line_1, line_2, city, state, zip_shipping, phone} = this.state;
          const user = {
            line_1,
            line_2,
            city,
            state,
            zip_shipping,
            phone
          }

          if (line_1 && line_2 && city && state && zip_shipping && phone) {
            callback(user);
          } else {
            window.alert('ALL fields must be filled out in order to submit!');
          }
        }}>
          <ul>
            {data.map((data, index) => {
              return (
                <InputBox
                key={index}
                  title={data.title}
                  placeholderName={data.placeholderName}
                  defaultVal={data.defaultVal}
                  callback={(e) => this.setState({ name: e.target.value })}
                />
              );
            })}
          </ul>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form_2;