import React from "react";

export default class FormCon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { vale: "" };
  }

  render() {
    return (
      <>
        <form className="ko">
          <label for="fmm"> This for the form : </label>
          <input
            type="text"
            id="fmm"
            placeholder="first name"
            value={this.state.vale}
          />
        </form>
        {console.log(this.state.vale)}
      </>
    );
  }
}
