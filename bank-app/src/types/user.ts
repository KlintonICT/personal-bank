export type UserInfo = {
  name: string;
  greetingMessage: string;
};

export type UserProfile = {
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
export type UserCard = {
  name: string;
  status: UserCardStatus;
  issuer: string;
  color: string;
  borderColor?: string;
  number?: string;
};

export type UserAccount = {
  type: string;
  amount: number;
  currency: string;
  accountNumber: string;
  issuer: string;
  progress?: string;
  color: string;
  flags?: string[];
  isMainAccount: boolean;
};
