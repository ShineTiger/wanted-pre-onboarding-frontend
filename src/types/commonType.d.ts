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
  content: string;
  isCompleted: boolean;
  userId: number;
}
