import "./Settings.css";

const Settings = () => {
  return (
    <div className="settings-container">
      <h1>Account Settings</h1>
      <form className="form-group">
        <label>
          Change Password
          <input type="password" placeholder="new password" />
        </label>
        <button className="change-pw-btn">Change</button>
      </form>
      <button className="delete-acc-btn"> Delete Account</button>
    </div>
  );
};

export default Settings;
