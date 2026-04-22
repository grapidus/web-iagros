import {
  AgroInsumosApiResponse,
  AgroInsumosCategory,
} from "../models/agroInsumos.model";

const BASE_URL = "http://localhost:3000/api/iagros/categories";

const handleResponse = async <T>(response: Response): Promise<T> => {
  const json = await response.json();
  if (!response.ok) throw new Error(json.message || "Unknown error");
  return json;
};

export const fetchAgroInsumosCategories =
  async (): Promise<AgroInsumosApiResponse> => {
    const response = await fetch(BASE_URL);
    return handleResponse<AgroInsumosApiResponse>(response);
  };

export const fetchAllAgroInsumosCategories =
  async (): Promise<AgroInsumosApiResponse> => {
    const response = await fetch(`${BASE_URL}/admin/all`);
    return handleResponse<AgroInsumosApiResponse>(response);
  };

export const fetchAgroInsumosCategoryById = async (
  id: string,
): Promise<AgroInsumosCategory> => {
  const response = await fetch(`${BASE_URL}/${id}`);
  return handleResponse<AgroInsumosCategory>(response);
};

export const createAgroInsumosCategory = async (data: {
  name: string;
  slug: string;
}): Promise<AgroInsumosCategory> => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return handleResponse<AgroInsumosCategory>(response);
};

export const updateAgroInsumosCategory = async (
  id: string,
  data: { name?: string; slug?: string; active?: boolean },
): Promise<AgroInsumosCategory> => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return handleResponse<AgroInsumosCategory>(response);
};

export const deleteAgroInsumosCategory = async (id: string): Promise<void> => {
  const response = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  return handleResponse<void>(response);
};

export const importAgroInsumosCategories = async (
  file: File,
): Promise<AgroInsumosApiResponse> => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${BASE_URL}/importar`, {
    method: "POST",
    body: formData,
  });

  return handleResponse<AgroInsumosApiResponse>(response);
};
