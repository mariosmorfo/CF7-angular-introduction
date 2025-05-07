export interface User {
  username: String,
  password: String,
  surName: String,
  email: String,
  address: {
    area: String,
    road: String
  }
}
