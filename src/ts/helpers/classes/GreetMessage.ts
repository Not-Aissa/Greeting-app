import storageGet from "../functions/storageGet";
import storageSet from "../functions/storageSet";
import GreetMember from "../interfaces/GreetMember";
import GreetMessageOptions from "../types/GreetMessageOptions";
import GreetMessageType from "../types/GreetMessageType";

class GreetMessage implements GreetMember<GreetMessageType> {
  private _message: GreetMessageType;

  public constructor(options: GreetMessageOptions) {
    this._message = storageGet("message", false) || options.message;
  }

  public update(newMessage: GreetMessageType): void {
    this._message = newMessage;

    storageSet("message", this._message);
  }

  public get message(): GreetMessageType {
    return this._message;
  }
}

export default GreetMessage;
