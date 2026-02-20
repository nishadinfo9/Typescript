function Chai(kind: string | number) {
  if (typeof kind === "string") {
    return `Service ${kind} chai...`;
  }
  return `Service default ${kind} chai...`;
}

function anotherChai(msg: string) {
  if (msg) {
    return `Service our popular ${msg} chai`;
  }
  return `Service our default chai`;
}

function orderChai(order: "small" | "medium" | "large" | number) {
  if (order === "small") {
    return `small cutting chai...`;
  }
  if (order === "medium" || order === "large") {
    return `make extra chai...`;
  }
  return `chai order #${order}`;
}

type masalaChai = { type: "masala"; spicelevel: number };
type redChai = { type: "red"; amount: number };
type milkChai = { type: "milk"; aroma: number };

type Chai = masalaChai | redChai | milkChai;

function OrderChai(order: Chai) {
  switch (order.type) {
    case "masala":
      return `Masala cahi...`;
      break;
    case "milk":
      return `Milk cahi...`;
      break;
    case "red":
      return `Red cahi...`;
      break;
  }
}

function brew(order: masalaChai | milkChai) {
  if ("spicelevel" in order) {
    return `masala chai...`;
  }
}

function anotherBrew(order: redChai | milkChai) {
  if ("aroma" in order) {
    return `milk chai...`;
  }
}

function lastBrew(order: milkChai | redChai) {
  if ("amount" in order) {
    return `red chai...`;
  }
}

// function isStringArray(arr: unknown): arr is string {}

class KulhadChai {
  serve() {
    return `serving kulhad chai...`;
  }
}

class CuttingChai {
  serve() {
    return `serving cutting chai....`;
  }
}

function serve(chai: KulhadChai | CuttingChai) {
  if (chai instanceof KulhadChai) {
    return chai.serve();
  }
}

type chaiOrder = {
  type: string;
  suger: number;
};

function isChaiOrder(obj: any): obj is chaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.suger === "string"
  );
}

function serveOrder(item: chaiOrder) {
  if (isChaiOrder(item)) {
    return `serving ${item.type} chai with ${item.suger} suger`;
  }
}
