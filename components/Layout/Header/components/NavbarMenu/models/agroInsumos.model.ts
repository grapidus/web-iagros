export interface AgroInsumosCategory {
  id: string;
  name: string;
  slug: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AgroInsumosApiResponse {
  statusCode: number;
  message: string;
  data: AgroInsumosCategory[];
}
