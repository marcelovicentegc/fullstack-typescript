import { inject, observer } from "mobx-react";
import * as React from "react";
import { AnimalsStore, ErrorStore } from "../../../stores";
import { CreateAnimal } from "./crud/CreateAnimal";
import { ListAnimals } from "./crud/ListAnimals";
import "./main.scss";
import { ErrorMessage } from "./misc/ErrorMessage";

interface Props {
  animalsStore?: AnimalsStore;
  errorStore?: ErrorStore;
}

@inject("animalsStore", "errorStore")
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
        {this.props.errorStore.errorMessage && (
          <ErrorMessage errorMessage={this.props.errorStore.errorMessage} />
        )}
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
