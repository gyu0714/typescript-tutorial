class UserInfo {
  private static instance: UserInfo;
  private constructor() {}

  public static getInstance(): UserInfo {
    if (!UserInfo.instance) {
      UserInfo.instance = new UserInfo();
    }

    return UserInfo.instance;
  }

  private _firstName: string = '';

  public get FRIST_NAME(): string {
    return this._firstName;
  }
  public set FRIST_NAME(value: string) {
    this._firstName = value;
  }
}

const userInfo = UserInfo.getInstance();
const userInfo1 = UserInfo.getInstance();

userInfo.FRIST_NAME = 'KIM';
console.log(userInfo.FRIST_NAME);
console.log(userInfo === userInfo1);
