export type Icredentials = {
  name: string;
  email: string;
};

export type IUserState = {
  id: string;
  token: string;
  name: string;
  email: string;
  phone: string;
  avatarUrl: string;
};

export type INotes = {
  tag: string;
  term: string;
  definition: string;
  options?: string[];
};

export type INotesState = {
  notes: INotes[];
};
