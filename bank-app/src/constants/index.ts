export enum UserCardStatus {
  IN_PROGRESS = 'in-progress',
  ACTIVE = 'Active',
}

export const UserCardStatusText = {
  [UserCardStatus.IN_PROGRESS]: 'In Progress',
  [UserCardStatus.ACTIVE]: 'Active',
};

export enum UserAccountType {
  SAVING_ACCOUNT = 'saving-account',
  CREDIT_LOAN = 'credit-loan',
  GOAL_SAVING_ACCOUNT = 'goal-saving-account',
}
