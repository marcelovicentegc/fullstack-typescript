import * as React from "react";
import CreateAnimal from "./crud/CreateAnimal";
import ListAnimals from "./crud/ListAnimals";
import "./main.css";

interface Props {}

export default class HelloWorld extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.handleCreate = this.handleCreate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  state = {
    helloworld: true,
    create: false,
    update: false,
    delete: false
  };

  handleCreate() {
    this.setState({
      create: true,
      helloworld: false
    });
  }

  handleUpdate() {
    this.setState({
      update: true,
      helloworld: false
    });
  }

  handleDelete() {
    this.setState({
      delete: true,
      helloworld: false
    });
  }

  render() {
    return (
      <>
        {this.state.helloworld ? (
          <>
            <div className="hello-world">
              <p>Hello world 👽!</p>
            </div>
            <div className="nav">
              <button className="button" onClick={this.handleCreate}>
                <span>Create</span>
              </button>
              <button className="button" onClick={this.handleUpdate}>
                <span>Update</span>
              </button>
              <button className="button" onClick={this.handleDelete}>
                <span>Delete</span>
              </button>
            </div>
          </>
        ) : null || this.state.create ? (
          <CreateAnimal />
        ) : null || this.state.update ? (
          <ListAnimals to="update" />
        ) : null || this.state.delete ? (
          <ListAnimals to="delete" />
        ) : null}
      </>
    );
  }
}
