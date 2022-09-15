import { Component } from "react";

class Hello extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      currTask: "",
    };
  }

  trackInput = (e) => {
    this.setState({
      currTask: e.target.value,
    });
  };

  addTaskHandler = () => {
    this.setState({
      tasks: [...this.state.tasks, { task: this.state.currTask }]
    });
  };

  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.currTask}
          onChange={this.trackInput}
        />
        <button onClick={this.addTaskHandler}>add</button>
       <ul>
       {
       this.state.tasks.map((cont) => {
          return(
            <li>{cont.task}</li>
          )
        })
        }
       </ul>
      </>
    );
  }
}

export default Hello;
