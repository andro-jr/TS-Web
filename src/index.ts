import { User } from "./models/User";

const user = new User({ name: "Prabin", age: 44 });

user.on("change", () => {
  console.log("changing");
});
user.on("save", () => {
  console.log("saving");
});

user.trigger("change");
user.trigger("save");
