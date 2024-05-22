export interface Query {
  query: string;
}

export interface Subdivision {
  code: string;
  shortName: string;
}

export interface Result {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  type: string;
  nationwide: boolean;
  subdivisions?: Subdivision[];
}

export type RootStackParamList = {
  Home: undefined;
  Results: {query: string};
  Detail: {result: Result};
};
