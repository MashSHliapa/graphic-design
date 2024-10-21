export interface DataInitialState {
  loading: boolean;
  error: null | string;
  data: { id: number; image: string }[];
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
