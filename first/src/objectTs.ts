let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "masala",
  price: 10,
  isHot: true,
};

type Chai = {
  name: string;
  price: number;
  ingredinet?: string[];
};

const adrakChai: Chai = {
  name: "adrak",
  price: 30,
  ingredinet: ["adrak", "tea leaves"],
};

type Brew = {
  brewTime: number;
};

const cofee = {
  brewTime: 5,
  beans: "arabican",
  bean: "arabican",
};
const brewCofee: Brew = cofee;

type Item = { name: string; quantity: number };
type Address = { street: string; postCode: number };

type order = {
  _id: string;
  items: Item[];
  address: Address;
};

type NewChai = {
  name: string;
  price: number;
  isHot: boolean;
};

const partialVal = (order: Partial<NewChai>) => {
  console.log("optional value", order);
};

partialVal({ name: "masala" });
partialVal({ price: 50 });
partialVal({});

type anotherChai = {
  name?: string;
  price?: number;
};

const chaiFun = (order: Required<anotherChai>) => {
  console.log("all value are required", order);
};

chaiFun({ name: "nishad", price: 1 });

type MoreChai = {
  name: string;
  price: number;
  isHot: false;
  indredients: string[];
};

type NowChai = Pick<MoreChai, "name" | "price" | "isHot">;

const makeChai: NowChai = {
  name: "lemon chai",
  price: 20,
  isHot: false,
};
