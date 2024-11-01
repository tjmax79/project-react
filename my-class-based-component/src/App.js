import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Olatunji Ogidan",
        bio: "A passionate developer.",
        imgSrc: "/public/Snapchat.jpg",
        profession: "Software Engineer"
      },
      shows: false,
      mountedTime: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.setState({ mountedTime: new Date() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  toggleShow = () => {
    this.setState(prevState => ({ shows: !prevState.shows }));
  }

  render() {
    const { person, shows, mountedTime } = this.state;
    const timeSinceMounted = Math.floor((new Date() - mountedTime) / 1000);

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>
        {shows && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>{person.profession}</p>
          </div>
        )}
        <p>Component mounted for: {timeSinceMounted} seconds</p>
      </div>
    );
  }
}

export default App;
