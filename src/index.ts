import { User } from "./models/User";
import { UserForm } from "./views/UserForm";

const user = User.buildUser({ name: "Amreeta", age: 22 });

const userForm = new UserForm(document.getElementById("root")!, user);

userForm.render();
