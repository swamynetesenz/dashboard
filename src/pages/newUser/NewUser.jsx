import {
  NewUserContainer,
  NewUserForm,
  FormItem,
  GenderContainer,
  NewUserButton
} from "./NewUser.styled";

function NewUser() {
  return (
    <NewUserContainer>
      <h2 className="newUserTitle">New User</h2>
      <NewUserForm>
        <FormItem>
          <label>Username</label>
          <input type="text" placeholder="Username" />
        </FormItem>
        <FormItem>
          <label>Full Name</label>
          <input type="text" placeholder="Full Name" />
        </FormItem>
        <FormItem>
          <label>Email</label>
          <input type="email" placeholder="Email" />
        </FormItem>
        <FormItem>
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </FormItem>
        <FormItem>
          <label>Phone</label>
          <input type="text" placeholder="Phone" />
        </FormItem>
        <FormItem>
          <label>Password</label>
          <input type="text" placeholder="Address" />
        </FormItem>
        <FormItem>
          <label className="genderLabel">Gender</label>
          <GenderContainer>
            <div className="radioContainer">
              <input type="radio" name="gender" id="male" value="male" />
              <label for="male">Male</label>
            </div>
            <div className="radioContainer">
              <input type="radio" name="gender" id="female" value="female" />
              <label for="female">Female</label>
            </div>
            <div className="radioContainer">
              <input type="radio" name="gender" id="other" value="other" />
              <label for="other">Other</label>
            </div>
          </GenderContainer>
        </FormItem>
        <FormItem>
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </FormItem>
        <NewUserButton>Create</NewUserButton>
      </NewUserForm>
    </NewUserContainer>
  );
}

export default NewUser;
