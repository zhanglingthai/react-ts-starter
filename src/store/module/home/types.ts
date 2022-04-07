export interface Home {
  id: number;
  title: string;
  body: string;
}

export type HomeState = {
  articles: Home[];
};

export type HomeAction = {
  type: string;
  article: Home;
};

export type DispatchType = (args: HomeAction) => HomeAction;
