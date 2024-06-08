export class UserForm {
  constructor(public parent: Element) {}

  get template(): string {
    return `
            <div>
                <h1>User Form</h1>
                <input />
                <button>Submit</button>
            </div>`;
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:button": this.onButtonClick,
    };
  }

  onButtonClick(): void {
    console.log("Hi there");
  }

  render(): void {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template;

    this.parent.append(templateElement.content);
  }
}
