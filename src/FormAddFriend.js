import Button from "./Button";

export default function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>🤰 Friend name</label>
      <input type="text" />

      <label>🖼 Image url</label>
      <input type="text" disabled />

      <Button>Add</Button>
    </form>
  );
}
