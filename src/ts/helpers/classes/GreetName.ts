import storageGet from "../functions/storageGet";
import storageSet from "../functions/storageSet";
import GreetMember from "../interfaces/GreetMember";
import GreetNameOptions from "../types/GreetNameOptions";

class GreetName implements GreetMember<string> {
  private _name: string;

  public constructor(options: GreetNameOptions) {
    this._name = storageGet("name", false) || options.name;
  }

  public update(newName: string): void {
    this._name = newName;

    storageSet("name", this._name);
  }

  public get name(): string {
    return this._name;
  }
}

export default GreetName;
