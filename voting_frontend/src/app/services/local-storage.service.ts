class User {
  public id: number;
  public name: string;
  public login: string;
  public password: string;
  public email: string;
  public priveleged: string;
}

export class LocalStorageService {


  public static model: User = {
    id: 1,
    name: '',
    login: 'Guest',
    password: '',
    email: 'guest@gmail.com',
    priveleged: 'user'
  };

  private static UserLogin = 'Guest';
  private static userId = 'userId';

  public static setUserLogin(userLogin: string): void {
    this.UserLogin = userLogin;
  }

  public static getUserLogin(): string {
    return this.UserLogin;
  }

  public static setUserId(userId: number): void {
    this.setValue(userId, this.userId);
  }

  public static getUserId(): number {
    return this.getNumber(this.userId);
  }

  public static getBoolean(key: string): boolean {
    return Boolean(this.getObject<any>(key));
  }

  public static getNumber(key: string): number {
    const id = localStorage.getItem(key);
    return id ? Number.parseInt(id, 10) : null;
  }

  public static getObject<T>(key: string): T {
    const object = localStorage.getItem(key);
    return object ? JSON.parse(object) : null;
  }

  public static setValue(value: any, key: string): void {
    if (value) {
      if (typeof value === 'object') {
        localStorage.setItem(key, JSON.stringify(value));
      } else {
        localStorage.setItem(key, value.toString());
      }
    } else {
      localStorage.removeItem(key);
    }
  }

}
