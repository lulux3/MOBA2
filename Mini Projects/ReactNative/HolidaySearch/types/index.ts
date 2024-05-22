export interface Query {
  query: string;
}

export interface Result {
  id: number;
  title: string;
  description: string;
}

export type RootStackParamList = {
  Home: undefined;
  Results: {query: string};
  Detail: {result: Result};
};
