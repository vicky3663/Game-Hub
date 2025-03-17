import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
  }
  
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '19e5eff6adba4becbdeb70f2ec4cd963'
}
});