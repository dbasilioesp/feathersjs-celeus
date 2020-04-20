import { Application } from "../declarations";
import users from "./users/users.service";
import characters from "./characters/characters.service";
import uploads from "./uploads/uploads.service";
// Don't remove this comment. It's needed to format import lines nicely.

export default function(app: Application) {
  app.configure(users);
  app.configure(characters);
  app.configure(uploads);
  app.configure(uploads);
}
