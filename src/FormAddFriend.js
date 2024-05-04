import Button from "./Button";

export default function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>🤰 Friend name</label>
      <input type="text" />

      <label>🖼 Image url</label>
      <input type="text" disabled />

      <label>🤑 Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <Button>Add</Button>
    </form>
  );
}
