import React, { Component } from 'react';

class About extends Component {

    // component code goes here
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/players')
        .then(response => response.json())
        .then(data => this.setState({ data }));
    }


    render() {
        return (
          <div>
            <h1>About</h1>
            <p>This is the about page.</p>
            <ul>
                    {this.state.data.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
          </div>
        );
      }
    }
  export default About;