import { User } from "./User";
import { FriendsList } from "./FriendsList";
import users from '../users.json'
import friends from '../friends.json'
import data from '../data.json'
import { StatisticsList } from "./StatisticsList";

export const App = () => {
  return (
    <div>
      <User user={users}/>
      <StatisticsList stats={data} />
      <FriendsList friends={friends} />
    </div>
  );
};
