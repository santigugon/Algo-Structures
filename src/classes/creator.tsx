export class Manager {
  private name: string;
  private email: string;
  private password: string;

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public setPassword(newPassword: string): void {
    this.password = newPassword;
  }

  public getPassword(): string {
    return this.password;
  }
}
