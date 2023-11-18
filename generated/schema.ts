// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Pool extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("ordersCount", Value.fromI32(0));
    this.set("usersCount", Value.fromI32(0));
    this.set("deposit", Value.fromBigInt(BigInt.zero()));
    this.set("fiatBalance", Value.fromBigInt(BigInt.zero()));
    this.set("tokenBalance", Value.fromBigInt(BigInt.zero()));
    this.set("tradeVolume", Value.fromBigInt(BigInt.zero()));
    this.set("strategyType", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Pool entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Pool entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Pool", id.toString(), this);
    }
  }

  static load(id: string): Pool | null {
    return changetype<Pool | null>(store.get("Pool", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get ordersCount(): i32 {
    let value = this.get("ordersCount");
    return value!.toI32();
  }

  set ordersCount(value: i32) {
    this.set("ordersCount", Value.fromI32(value));
  }

  get usersCount(): i32 {
    let value = this.get("usersCount");
    return value!.toI32();
  }

  set usersCount(value: i32) {
    this.set("usersCount", Value.fromI32(value));
  }

  get deposit(): BigInt {
    let value = this.get("deposit");
    return value!.toBigInt();
  }

  set deposit(value: BigInt) {
    this.set("deposit", Value.fromBigInt(value));
  }

  get fiatBalance(): BigInt {
    let value = this.get("fiatBalance");
    return value!.toBigInt();
  }

  set fiatBalance(value: BigInt) {
    this.set("fiatBalance", Value.fromBigInt(value));
  }

  get tokenBalance(): BigInt {
    let value = this.get("tokenBalance");
    return value!.toBigInt();
  }

  set tokenBalance(value: BigInt) {
    this.set("tokenBalance", Value.fromBigInt(value));
  }

  get tradeVolume(): BigInt {
    let value = this.get("tradeVolume");
    return value!.toBigInt();
  }

  set tradeVolume(value: BigInt) {
    this.set("tradeVolume", Value.fromBigInt(value));
  }

  get strategyType(): string {
    let value = this.get("strategyType");
    return value!.toString();
  }

  set strategyType(value: string) {
    this.set("strategyType", Value.fromString(value));
  }
}

export class PoolUser extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("user", Value.fromBytes(Bytes.empty()));
    this.set("ordersCount", Value.fromI32(0));
    this.set("deposit", Value.fromBigInt(BigInt.zero()));
    this.set("fiatBalance", Value.fromBigInt(BigInt.zero()));
    this.set("tokenBalance", Value.fromBigInt(BigInt.zero()));
    this.set("strategyType", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PoolUser entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save PoolUser entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("PoolUser", id.toString(), this);
    }
  }

  static load(id: string): PoolUser | null {
    return changetype<PoolUser | null>(store.get("PoolUser", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value!.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get ordersCount(): i32 {
    let value = this.get("ordersCount");
    return value!.toI32();
  }

  set ordersCount(value: i32) {
    this.set("ordersCount", Value.fromI32(value));
  }

  get deposit(): BigInt {
    let value = this.get("deposit");
    return value!.toBigInt();
  }

  set deposit(value: BigInt) {
    this.set("deposit", Value.fromBigInt(value));
  }

  get fiatBalance(): BigInt {
    let value = this.get("fiatBalance");
    return value!.toBigInt();
  }

  set fiatBalance(value: BigInt) {
    this.set("fiatBalance", Value.fromBigInt(value));
  }

  get tokenBalance(): BigInt {
    let value = this.get("tokenBalance");
    return value!.toBigInt();
  }

  set tokenBalance(value: BigInt) {
    this.set("tokenBalance", Value.fromBigInt(value));
  }

  get strategyType(): string {
    let value = this.get("strategyType");
    return value!.toString();
  }

  set strategyType(value: string) {
    this.set("strategyType", Value.fromString(value));
  }
}

export class UserEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("user", Value.fromBytes(Bytes.empty()));
    this.set("deposit", Value.fromBigInt(BigInt.zero()));
    this.set("fiatBalance", Value.fromBigInt(BigInt.zero()));
    this.set("tokenBalance", Value.fromBigInt(BigInt.zero()));
    this.set("strategyType", Value.fromString(""));
    this.set("tokenAddress", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save UserEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save UserEntity entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("UserEntity", id.toString(), this);
    }
  }

  static load(id: string): UserEntity | null {
    return changetype<UserEntity | null>(store.get("UserEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value!.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get deposit(): BigInt {
    let value = this.get("deposit");
    return value!.toBigInt();
  }

  set deposit(value: BigInt) {
    this.set("deposit", Value.fromBigInt(value));
  }

  get fiatBalance(): BigInt {
    let value = this.get("fiatBalance");
    return value!.toBigInt();
  }

  set fiatBalance(value: BigInt) {
    this.set("fiatBalance", Value.fromBigInt(value));
  }

  get tokenBalance(): BigInt {
    let value = this.get("tokenBalance");
    return value!.toBigInt();
  }

  set tokenBalance(value: BigInt) {
    this.set("tokenBalance", Value.fromBigInt(value));
  }

  get strategyType(): string {
    let value = this.get("strategyType");
    return value!.toString();
  }

  set strategyType(value: string) {
    this.set("strategyType", Value.fromString(value));
  }

  get tokenAddress(): Bytes {
    let value = this.get("tokenAddress");
    return value!.toBytes();
  }

  set tokenAddress(value: Bytes) {
    this.set("tokenAddress", Value.fromBytes(value));
  }
}

export class Order extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("orderId", Value.fromI32(0));
    this.set("fromToken", Value.fromBytes(Bytes.empty()));
    this.set("toToken", Value.fromBytes(Bytes.empty()));
    this.set("user", Value.fromBytes(Bytes.empty()));
    this.set("price", Value.fromBigInt(BigInt.zero()));
    this.set("amount", Value.fromBigInt(BigInt.zero()));
    this.set("isBuy", Value.fromBoolean(false));
    this.set("open", Value.fromBoolean(false));
    this.set("executed", Value.fromBoolean(false));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Order entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Order entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Order", id.toString(), this);
    }
  }

  static load(id: string): Order | null {
    return changetype<Order | null>(store.get("Order", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get orderId(): i32 {
    let value = this.get("orderId");
    return value!.toI32();
  }

  set orderId(value: i32) {
    this.set("orderId", Value.fromI32(value));
  }

  get fromToken(): Bytes {
    let value = this.get("fromToken");
    return value!.toBytes();
  }

  set fromToken(value: Bytes) {
    this.set("fromToken", Value.fromBytes(value));
  }

  get toToken(): Bytes {
    let value = this.get("toToken");
    return value!.toBytes();
  }

  set toToken(value: Bytes) {
    this.set("toToken", Value.fromBytes(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value!.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get isBuy(): boolean {
    let value = this.get("isBuy");
    return value!.toBoolean();
  }

  set isBuy(value: boolean) {
    this.set("isBuy", Value.fromBoolean(value));
  }

  get open(): boolean {
    let value = this.get("open");
    return value!.toBoolean();
  }

  set open(value: boolean) {
    this.set("open", Value.fromBoolean(value));
  }

  get executed(): boolean {
    let value = this.get("executed");
    return value!.toBoolean();
  }

  set executed(value: boolean) {
    this.set("executed", Value.fromBoolean(value));
  }

  get orderHash(): string | null {
    let value = this.get("orderHash");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set orderHash(value: string | null) {
    if (!value) {
      this.unset("orderHash");
    } else {
      this.set("orderHash", Value.fromString(<string>value));
    }
  }
}

export class UserActivity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("user", Value.fromBytes(Bytes.empty()));
    this.set("orderId", Value.fromI32(0));
    this.set("fromAddress", Value.fromBytes(Bytes.empty()));
    this.set("toAddress", Value.fromBytes(Bytes.empty()));
    this.set("action", Value.fromString(""));
    this.set("price", Value.fromBigInt(BigInt.zero()));
    this.set("amount", Value.fromBigInt(BigInt.zero()));
    this.set("fiat", Value.fromBigInt(BigInt.zero()));
    this.set("token", Value.fromBigInt(BigInt.zero()));
    this.set("strategyType", Value.fromString(""));
    this.set("txHash", Value.fromString(""));
    this.set("timestamp", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save UserActivity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save UserActivity entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("UserActivity", id.toString(), this);
    }
  }

  static load(id: string): UserActivity | null {
    return changetype<UserActivity | null>(store.get("UserActivity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value!.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get orderId(): i32 {
    let value = this.get("orderId");
    return value!.toI32();
  }

  set orderId(value: i32) {
    this.set("orderId", Value.fromI32(value));
  }

  get fromAddress(): Bytes {
    let value = this.get("fromAddress");
    return value!.toBytes();
  }

  set fromAddress(value: Bytes) {
    this.set("fromAddress", Value.fromBytes(value));
  }

  get toAddress(): Bytes {
    let value = this.get("toAddress");
    return value!.toBytes();
  }

  set toAddress(value: Bytes) {
    this.set("toAddress", Value.fromBytes(value));
  }

  get action(): string {
    let value = this.get("action");
    return value!.toString();
  }

  set action(value: string) {
    this.set("action", Value.fromString(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get fiat(): BigInt {
    let value = this.get("fiat");
    return value!.toBigInt();
  }

  set fiat(value: BigInt) {
    this.set("fiat", Value.fromBigInt(value));
  }

  get token(): BigInt {
    let value = this.get("token");
    return value!.toBigInt();
  }

  set token(value: BigInt) {
    this.set("token", Value.fromBigInt(value));
  }

  get strategyType(): string {
    let value = this.get("strategyType");
    return value!.toString();
  }

  set strategyType(value: string) {
    this.set("strategyType", Value.fromString(value));
  }

  get txHash(): string {
    let value = this.get("txHash");
    return value!.toString();
  }

  set txHash(value: string) {
    this.set("txHash", Value.fromString(value));
  }

  get timestamp(): string {
    let value = this.get("timestamp");
    return value!.toString();
  }

  set timestamp(value: string) {
    this.set("timestamp", Value.fromString(value));
  }
}