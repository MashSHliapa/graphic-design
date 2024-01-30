export interface LogoInitialState {
  loading: boolean;
  error: null | string;
  data: never[];
}

export interface LogoResponse {
  loading: boolean;
  error: null | string;
  data: PostData[];
}

export interface CutawaysInitialState {
  loading: boolean;
  error: null | string;
  data: never[];
}

export interface CutawaysResponse {
  loading: boolean;
  error: null | string;
  data: PostData[];
}

export interface PostData {
  id: number;
  image: string;
}

