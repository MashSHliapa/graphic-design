import { client } from '../utils/client';
import {
  diplomasAndCertificatesEndpoint,
  flyersAndpoint,
  logosEndpoint,
  cutawaysEndpoint,
  priceMenuNotebooksEndpoint,
  infographicsPostsStoriesEndpoint,
} from '../api';

export const requestLogos = async () => {
  const { data } = await client.get(logosEndpoint);
  return data;
};

export const requestCutaways = async () => {
  const { data } = await client.get(cutawaysEndpoint);
  return data;
};

export const requestPriceMenuNotebooks = async () => {
  const { data } = await client.get(priceMenuNotebooksEndpoint);
  return data;
};

export const requestFlyers = async () => {
  const { data } = await client.get(flyersAndpoint);
  return data;
};

export const requestDiplomasAndCertificates = async () => {
  const { data } = await client.get(diplomasAndCertificatesEndpoint);
  return data;
};

export const requestInfographicsPostsStories = async () => {
  const { data } = await client.get(infographicsPostsStoriesEndpoint);
  return data;
};
