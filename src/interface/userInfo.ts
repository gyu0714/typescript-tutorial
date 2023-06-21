class UserInfo {
  private static firstName: string;
  private static secondName: string;
  private static age: number;

  private static userInfo: UserInfo = new UserInfo();

  private UserInfo() {}

  public static setAge: (params: number) => {};
}
