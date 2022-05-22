// Model(User):
class User {
  // Fields:
  userName;
  userPass;
  // Constructor:
  constructor(userName, userPass) {
    // Initializing:
    this.userName = userName.toUpperCase();
    this.userPass = userPass.toUpperCase();
  }
  // Method(GetUserMetaData):
  get getUserMetaData() { return `USER-NAME[${this.userName}] && USER-PASS[${this.userPass}]`; }
}
// Exporting:
module.exports.User = User;