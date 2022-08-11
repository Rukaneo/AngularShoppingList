export interface APIResponse<T=any> {
  status:number;
  message:string;
  data:T;
}
