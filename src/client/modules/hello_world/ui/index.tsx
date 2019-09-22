import { inject, observer } from "mobx-react";
import * as React from "react";
import { AnimalsStore } from "../../../stores/AnimalsStore";
import { CreateAnimal } from "./crud/CreateAnimal";
import { ListAnimals } from "./crud/ListAnimals";
import "./main.scss";

interface Props {
  animalsStore?: AnimalsStore;
}

@inject("animalsStore")
@observer
export class HelloWorld extends React.Component<Props> {
  private handleCreate = () => {
    this.props.animalsStore.handleCreate();
  };

  private handleUpdate = () => {
    this.props.animalsStore.handleUpdate();
  };

  private handleDelete = () => {
    this.props.animalsStore.handleDelete();
  };

  public render() {
    return (
      <>
        {this.props.animalsStore.helloworld && (
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
        )}
        {this.props.animalsStore.create && <CreateAnimal />}
        {this.props.animalsStore.update || this.props.animalsStore.delete ? (
          <ListAnimals
            to={this.props.animalsStore.update ? "update" : "delete"}
          />
        ) : null}
      </>
    );
  }
}
