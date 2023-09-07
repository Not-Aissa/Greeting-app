import Paragraph from "../../types/elements/Paragraph";
import Select from "../../types/elements/Select";
import GreetMessageUIOptions from "../types/GreetMessageUIOptions";
import dom from "./Dom";
import GreetMessage from "./GreetMessage";

const greetMessageElm = dom.select<Paragraph>("#greet_message_elm");
const greetTypeSelect = dom.select<Select>("#greet_type_select");

class GreetMessageUI {
  private _greetMessage: GreetMessage;

  public constructor(options: GreetMessageUIOptions) {
    this._greetMessage = options.greetMessage;
  }

  public updateGreetMessage(): void {
    greetMessageElm.textContent = `${this._greetMessage.message
      .slice(0, 1)
      .toUpperCase()}${this._greetMessage.message.slice(1)}`;
  }

  public updateGreetMessageSelect(): void {
    greetTypeSelect.value = this._greetMessage.message;
  }
}

export default GreetMessageUI;
