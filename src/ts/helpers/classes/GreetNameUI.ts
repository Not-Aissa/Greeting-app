import Input from "../../types/elements/Input";
import Paragraph from "../../types/elements/Paragraph";
import GreetNameUIOptions from "../types/GreetNameUIOptions";
import dom from "./Dom";
import GreetName from "./GreetName";

const greetNameElm = dom.select<Paragraph>("#greet_name_elm");
const greetNameInput = dom.select<Input>("#greet_name_input");

class GreetNameUI {
  private _greetName: GreetName;

  public constructor(options: GreetNameUIOptions) {
    this._greetName = options.greetName;
  }

  public updateGreetName(): void {
    if (this._greetName.name)
      greetNameElm.textContent = `${this._greetName.name
        .slice(0, 1)
        .toUpperCase()}${this._greetName.name.slice(1)}`;
    else greetNameElm.textContent = "there";
  }

  public updateGreetNameInput(): void {
    greetNameInput.value = this._greetName.name;
  }
}

export default GreetNameUI;
