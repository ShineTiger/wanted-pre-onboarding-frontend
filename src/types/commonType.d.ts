type ProfileType = {
  email: string;
  password: string;
};

type ProfileValidation = {
  email?: boolean;
  password?: boolean;
};

interface TodoInfo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}
