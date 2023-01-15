type SignupData = UserCredentials & {
  username: string;
  hashedPwd?: string;
}

type UserCredentials = {
  email: string;
  password: string;
}

type User = {
  _id: string;
  username: string;
  email: string;
  password: string;
  totalSalesValue: number;
  receivables: number;
  debtors: number;
  creationDate: Date;
}

export {
  SignupData,
  UserCredentials,
  User
}
