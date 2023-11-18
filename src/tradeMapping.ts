import { Order, UserActivity } from "../generated/schema";

import {
  CancelOrder,
  OrderCreated,
  OrderExecuted,
  Staked,
  Withdraw,
} from "../generated/SleepSwapMasterChef/SleepSwapMasterChef";

export function handleStaked(event: Staked): void {
  // Updating - Position
  // let positionData = Position.load(event.params.user.toHex());
  // if (!positionData) {
  //   positionData = new Position(event.params.user.toHex());
  //   positionData.user = event.params.user;
  //   positionData.tokenAddress = event.params.toAddress;
  // }
  // positionData.deposit = positionData.deposit.plus(event.params.amount0);
  // positionData.fiat = positionData.fiat.plus(event.params.amount0);
  // positionData.token = positionData.token.plus(event.params.amount1);
  // positionData.save();
  // Logging - Activity
  // let activity = new UserActivity(event.params.positionId);
  // activity.user = event.params.user;
  // activity.tokenAddress = event.params.toAddress;
  // activity.action = "STAKED";
  // activity.amount = event.params.amount0;
  // activity.fiat = event.params.amount0;
  // activity.token = event.params.toAddress;
  // activity.save();
}

export function handleOrderCreated(event: OrderCreated): void {
  // Logging - Create Order
  let order = new Order(event.params.orderId.toString());

  order.fromToken = event.params.fromToken;
  order.toToken = event.params.toToken;
  order.user = event.params.user;
  order.price = event.params.price;
  order.amount = event.params.amount;
  order.isBuy = event.params.isBuy;
  order.open = event.params.open;
  order.executed = event.params.executed;
  order.orderHash = event.params.orderHash;
  order.startAt = event.params.startAt;
  order.save();

  // Logging - Activity
  // let activity = new UserActivity(event.transaction.hash.toHex());
  // activity.user = event.params.user;
  // activity.tokenAddress = event.params.tokenAddress;
  // activity.orderId = event.params.orderId.toI32();
  // activity.action = "CREATE_ORDER";
  // activity.amount = event.params.amount;
  // activity.type = event.params.isBuy ? "BUY" : "SELL";
  // activity.timestamp = event.block.timestamp.toString();
  // activity.save();
}

export function handleOrderExecuted(event: OrderExecuted): void {
  let order = Order.load(event.params.orderId.toString());
  if (order) {
    order.open = false;
    order.executed = true;
    order.save();

    // Logging - Activity
    // let activity = new UserActivity(event.params.orderId.hash.toHex());
    // activity.user = order.user;
    // activity.orderId = order.orderId.toI32();
    // activity.tokenAddress = event.params.toAmount;
    // activity.action = "EXECUTE_ORDER";
    // activity.amount = event.params.amount;
    // activity.price = event.params.price;
    // activity.amount = event.params.recieved;
    // activity.type = event.params.isBuy ? "BUY" : "SELL";
    // activity.timestamp = event.block.timestamp.toString();
    // activity.save();
  }
}

export function handleCancelOrder(event: CancelOrder): void {
  let order = new Order(event.params.orderId.toString());
  if (order) {
    order.open = false;
    order.executed = false;
    order.save();
  }

  // Logging - Activity
  // let activity = new UserActivity(event.transaction.hash.toHex());
  // activity.user = event.params.user;
  // activity.tokenAddress = order.tokenAddress;
  // activity.action = "CANCEL_ORDER";
  // activity.orderId = event.params.orderId.toI32();
  // activity.type = event.params.isBuy ? "BUY" : "SELL";
  // activity.timestamp = event.block.timestamp.toString();
  // activity.save();
}

export function handleWithdraw(event: Withdraw): void {
  //Updating - Position
  // let position = Position.load(event.params.user.toHex());
  // if (!position) {
  //   return;
  // }
  // if (position) {
  //   position.fiat = position.fiat.minus(event.params.usdtAmount);
  //   position.token = position.token.minus(event.params.tokenAmount);
  //   position.deposit = BigInt.fromI32(0);
  //   position.save();
  // }
  // Logging - Activity
  // let activity = new UserActivity(event.transaction.hash.toHex());
  // activity.user = event.params.user;
  // activity.tokenAddress = position.tokenAddress;
  // activity.action = "WITHDRAW";
  // activity.fiat = event.params.usdtAmount;
  // activity.token = event.params.tokenAmount;
  // activity.timestamp = event.block.timestamp.toString();
  // activity.save();
}
