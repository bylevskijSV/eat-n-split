import FriendList from "./FriendsList";
import FormAddFriend from "./FormAddFriend";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        <FormAddFriend />
        <Button>Add friend</Button>
      </div>

      <FormSplitBill />
    </div>
  );
}

export default App;
