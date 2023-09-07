import dom from "./ts/helpers/classes/Dom";
import GreetMessage from "./ts/helpers/classes/GreetMessage";
import GreetMessageUI from "./ts/helpers/classes/GreetMessageUI";
import GreetName from "./ts/helpers/classes/GreetName";
import GreetNameUI from "./ts/helpers/classes/GreetNameUI";
import GreetMessageType from "./ts/helpers/types/GreetMessageType";
import Button from "./ts/types/elements/Button";
import Input from "./ts/types/elements/Input";
import Select from "./ts/types/elements/Select";

const greetTypeSelect = dom.select<Select>("#greet_type_select");
const greetNameInput = dom.select<Input>("#greet_name_input");
const greetSubmitBtn = dom.select<Button>("#greet_submit_btn");

const greetMessage = new GreetMessage({ message: "hello" });

const greetMessageUI = new GreetMessageUI({ greetMessage });

const greetName = new GreetName({ name: "Aissa Bedr" });

const greetNameUI = new GreetNameUI({ greetName });

window.addEventListener("load", () => {
  greetMessageUI.updateGreetMessage();
  greetMessageUI.updateGreetMessageSelect();
  greetNameUI.updateGreetName();
  greetNameUI.updateGreetNameInput();
});

greetSubmitBtn.addEventListener("click", () => {
  greetMessage.update(greetTypeSelect.value as GreetMessageType);

  greetMessageUI.updateGreetMessage();

  greetName.update(greetNameInput.value);

  greetNameUI.updateGreetName();
});
