import { inject, observer } from "mobx-react";
import * as React from "react";
import { AnimalsStore, ErrorStore } from "../../../stores";
import { CreateAnimal } from "./components/CreateAnimal";
import { ListAnimals } from "./components/ListAnimals";
import * as style from "./main.scss";
import { ErrorMessage } from "./components/ErrorMessage";
import { Button } from "./components/Button";

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
            <div className={style.helloWorld} data-testid="helloWorld">
              <p>Hello world 👽!</p>
            </div>
            <div className={style.nav} data-testid="nav">
              <Button onClick={this.handleCreate} label={"Create"} />
              <Button onClick={this.handleUpdate} label={"Update"} />
              <Button onClick={this.handleDelete} label={"Delete"} />
            </div>
          </>
        )}
        {this.props.animalsStore.create && <CreateAnimal />}
        {(this.props.animalsStore.update || this.props.animalsStore.delete) && (
          <ListAnimals
            to={this.props.animalsStore.update ? "update" : "delete"}
          />
        )}
      </>
    );
  }
}
