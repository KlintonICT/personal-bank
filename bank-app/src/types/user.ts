import { UserAccountType, UserCardStatus } from '@/constants';

export type TUserInfo = {
  name: string;
  greetingMessage: string;
};

export type TUserProfile = {
  name: string;
  image: string;
  isBank: boolean;
};

export type TUserCard = {
  name: string;
  status: UserCardStatus;
  issuer: string;
  color: string;
  borderColor?: string;
  number?: string;
};

export type TUserAccount = {
  type: UserAccountType;
  title: string;
  amount: number;
  currency: string;
  accountNumber: string;
  issuer: string;
  progress?: number;
  color: string;
  flags?: string[];
  isMainAccount: boolean;
};
