import { User } from "./User";
import users from '../users.json'

export const App = () => {
  return (
    <div>
      <User user={users}/>
    </div>
  );
};
