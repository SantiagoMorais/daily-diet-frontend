export interface IResponse {
  message: string;
  status: number;
  type: "success" | "error";
}

export interface IResponseReturn {
  response: IResponse | undefined;
}
