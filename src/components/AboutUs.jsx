import React from "react";

class AboutUS extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      infoDetails: "manurice",
    };

    console.log(props.val + " construct choid"); // Log prop value
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/MAURICEDS0UZA");
    const res = await data.json();
    this.setState({ infoDetails: res });
  }

  componentDidUpdate() {
    console.log("update ");
  }

  render() {
    console.log(this.props.val + " Render child"); // Log prop value
    const { login, name } = this.state.infoDetails;
    return (
      <>
        <div>{this.props.val}</div>
        <div>{login}</div>
        <div>{name}</div>
        <button
          type="button"
          onClick={() => {
            this.setState({ name1: this.state.name1 + 1 });
          }}
        >
          hello
        </button>
      </>
    );
  }
}

export default AboutUS;
