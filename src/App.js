import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import $ from "jquery";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
      this.callAPI();
  }

  sendInput = async () => {
    console.log(document.getElementById("my-input").value)

    // code fragment
    var data = {
      service_id: 'service_wcdfgka',
      template_id: 'template_qre8qwc',
      user_id: '0cqDiMDYwjxE9FgXK',
      template_params: {
          'message' : document.getElementById("my-input").value
      }
    };

    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json'
    }).done(function() {
      alert('Your request was sent, thank you!');
    }).fail(function(error) {
      alert('Oops... ' + JSON.stringify(error));
    });
    // code fragment

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Request:</h1>
          <div>
            <input id='my-input' style={{"margin": "2em", "fontSize" : "24px"}} ></input>
            <br/>
            <button style={
              {"fontSize" : "24px", 
              "background-color" : "RGB(88, 12, 228)", 
              "border" : "none",
              "padding" : "0.4em",
              "borderRadius" : "15px",
              "color" : "white"
            }
              } onClick={this.sendInput}>Send Request</button>
          </div>
        </header>
        <p className="App-intro">{this.state.data}</p>
      </div>
    );
  }
}

export default App;
