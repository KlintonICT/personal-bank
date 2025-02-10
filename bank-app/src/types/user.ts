export type TUserInfo = {
  name: string;
  greetingMessage: string;
};

export type TUserProfile = {
  name: string;
  image: string;
  isBank: boolean;
};

export enum UserCardStatus {
  IN_PROGRESS = 'in-progress',
  ACTIVE = 'Active',
}
export const UserCardStatusText = {
  [UserCardStatus.IN_PROGRESS]: 'In Progress',
  [UserCardStatus.ACTIVE]: 'Active',
};
export type TUserCard = {
  name: string;
  status: UserCardStatus;
  issuer: string;
  color: string;
  borderColor?: string;
  number?: string;
};

export enum UserAccountType {
  SAVING_ACCOUNT = 'saving-account',
  CREDIT_LOAN = 'credit-loan',
  GOAL_SAVING_ACCOUNT = 'goal-saving-account',
}
export type TUserAccount = {
  type: UserAccountType;
  title: string;
  amount: number;
  currency: string;
  accountNumber: string;
  issuer: string;
  progress?: string;
  color: string;
  flags?: string[];
  isMainAccount: boolean;
};
