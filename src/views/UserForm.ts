export class UserForm {
  constructor(public parent: Element) {}

  get template(): string {
    return `
            <div>
                <h1>Test</h1>
                <input />
            </div>`;
  }

  render(): void {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template;

    this.parent.append(templateElement.content);
  }
}
