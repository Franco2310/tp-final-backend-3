export class UserDTO {
  constructor(user) {
    this.id = user._id;
    this.email = user.email;
    this.role = user.role;
    this.firstName = user.firstName || user.nombre || null;
    this.lastName = user.lastName || user.apellido || null;
    this.status = user.status || null;
  }
}