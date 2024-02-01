export interface DataInitialState {
  loading: boolean;
  error: null | string;
  data: never[];
}

export interface DataResponse {
  loading: boolean;
  error: null | string;
  data: PostData[];
}

export interface PostData {
  id: number;
  image: string;
}

