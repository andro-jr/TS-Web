import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
  get template(): string {
    return `
            <div>
                <h1>User Form</h1>
                <input />
                <button class="set-name">Change Name</button>
                <button class="set-age">Set Random Age</button>
                <button>Submit</button>
            </div>`;
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };
  onSetNameClick = (): void => {
    const input = this.parent.querySelector("input")!;
    const name = input.value;
    if (!name) return;

    this.model.set({ name });
  };
}
