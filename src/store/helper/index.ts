import http from './http';
import { Commit } from 'vuex';

export const createAction = (methods: string, url: string, mutations?: string) => {
  if (mutations) {
    return async (content: { commit: Commit }, params: any) => {
      const res = await (http as any)[methods](url, params);

      res.code === '0' && content.commit(mutations, res.data);
      return res
    };
  }

  return async ({}, params: any) => {

    const res = await (http as any)[methods](url, params);

    return res
  };
};
