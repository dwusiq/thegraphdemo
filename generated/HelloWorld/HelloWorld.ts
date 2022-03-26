// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AgeAdd extends ethereum.Event {
  get params(): AgeAdd__Params {
    return new AgeAdd__Params(this);
  }
}

export class AgeAdd__Params {
  _event: AgeAdd;

  constructor(event: AgeAdd) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get afterAge(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ChangeUser extends ethereum.Event {
  get params(): ChangeUser__Params {
    return new ChangeUser__Params(this);
  }
}

export class ChangeUser__Params {
  _event: ChangeUser;

  constructor(event: ChangeUser) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newName(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAge(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class HelloWorld extends ethereum.SmartContract {
  static bind(address: Address): HelloWorld {
    return new HelloWorld("HelloWorld", address);
  }

  age(): BigInt {
    let result = super.call("age", "age():(uint256)", []);

    return result[0].toBigInt();
  }

  try_age(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("age", "age():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class AgeAddCall extends ethereum.Call {
  get inputs(): AgeAddCall__Inputs {
    return new AgeAddCall__Inputs(this);
  }

  get outputs(): AgeAddCall__Outputs {
    return new AgeAddCall__Outputs(this);
  }
}

export class AgeAddCall__Inputs {
  _call: AgeAddCall;

  constructor(call: AgeAddCall) {
    this._call = call;
  }

  get _add(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class AgeAddCall__Outputs {
  _call: AgeAddCall;

  constructor(call: AgeAddCall) {
    this._call = call;
  }
}

export class ChangeUserCall extends ethereum.Call {
  get inputs(): ChangeUserCall__Inputs {
    return new ChangeUserCall__Inputs(this);
  }

  get outputs(): ChangeUserCall__Outputs {
    return new ChangeUserCall__Outputs(this);
  }
}

export class ChangeUserCall__Inputs {
  _call: ChangeUserCall;

  constructor(call: ChangeUserCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _age(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ChangeUserCall__Outputs {
  _call: ChangeUserCall;

  constructor(call: ChangeUserCall) {
    this._call = call;
  }
}
