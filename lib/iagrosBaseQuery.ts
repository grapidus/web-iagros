import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react';
import { useUIStore } from '../stores/uiStore';

export interface IagrosQueryArgs extends Omit<FetchArgs, 'url'> {
  url: string | (() => string);
  base?: string | (() => string);
  customErrorMessage?: string;
  customSuccessMessage?: string;
  showOnErrorAlert?: boolean;
  showOnSuccessAlert?: boolean;
  getData?: (response: any) => any;
  getErrorData?: (err: any) => any;
}

type IBaseOfQueryFnOrNormal = string | (() => string);

export function createIagrosBaseQuery(
  defaultBase: IBaseOfQueryFnOrNormal
): BaseQueryFn<IagrosQueryArgs, unknown, unknown> {
  return async (args, api, extraOptions) => {
    const {
      base,
      url,
      customErrorMessage,
      customSuccessMessage,
      showOnErrorAlert = false,
      showOnSuccessAlert = false,
      getData = (response) => response.data ?? response,
      getErrorData = (err: any) =>
        err.data?.message ?? err.data ?? 'Error desconocido',
      ...fetchArgs
    } = args;

    const baseUrl =
      typeof base === 'function'
        ? base()
        : base
          ? base
          : typeof defaultBase === 'function'
            ? defaultBase()
            : defaultBase;

    const resolvedUrl = typeof url === 'function' ? url() : url;

    const rawBaseQuery = fetchBaseQuery({ baseUrl });
    const result = await rawBaseQuery(
      { ...fetchArgs, url: resolvedUrl },
      api,
      extraOptions
    );

    const { addToast } = useUIStore.getState();

    if (result.error) {
      if (showOnErrorAlert) {
        const message =
          customErrorMessage ??
          getErrorData(result.error) ??
          'Ocurrió un error al procesar la solicitud. Intenta nuevamente.';
        addToast({ type: 'error', title: message });
      }
      return {
        error: {
          status: (result.error as any)?.status,
          data: getErrorData(result.error)
        }
      };
    } else {
      if (showOnSuccessAlert) {
        const title =
          customSuccessMessage ??
          (result.data as any)?.message ??
          'Operación realizada correctamente.';
        addToast({ type: 'success', title });
      }
      return {
        data: getData(result.data)
      };
    }
  };
}
