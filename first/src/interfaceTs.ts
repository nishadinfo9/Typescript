type ChaiOrder = {
  type: string;
  suger: number;
  strong: boolean;
};

function makeChai(order: ChaiOrder) {
  console.log(order);
}

function serveOrder(order: ChaiOrder) {
  console.log(order);
}

type TeaRecipe = {
  water: number;
  milk: number;
};

class MasalaChai implements TeaRecipe {
  water = 10;
  milk = 20;
}

interface CupSize {
  size: "small" | "medium";
}
class Chai implements CupSize {
  size: "small" | "medium" = "medium";
}

// type Response = { ok: true } | { ok: false };

// class Res implements Response {
//   ok: boolean = true;
// }

type TeaType = "masala" | "ginger" | "lemon";

function NewChaiOrder(t: TeaType) {
  console.log(t);
}

type BaseChai = { teaLeaves: number };
type Extra = { masala: number };
type NewMasalaChai = BaseChai & Extra;

const cup: NewMasalaChai = {
  teaLeaves: 5,
  masala: 10,
};

type User = {
  username: string;
  bio?: string;
};

const u1: User = {
  username: "nishad",
};

const u2: User = {
  username: "nishadhasan",
  bio: "hello guys",
};

type Config = {
  readonly appName: string;
  version: number;
};

const cfg: Config = {
  appName: "nishadhasan",
  version: 1,
};

cfg.version = 2
cfg.appName = 'hello' //take only one time 
