import { User } from "./models/User";

const user = new User();

user.events.on("change", () => {
  console.log("changing");
});

user.events.trigger("change");
