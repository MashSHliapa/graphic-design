import { client } from '../utils/client';
import { diplomasAndCertificatesEndpoint, flyersAndpoint, logosEndpoint, cutawaysEndpoint } from '../api';

export const requestLogos = async () => {
  const { data } = await client.get(logosEndpoint);
  return data;
};

export const requestCutaways = async () => {
  const { data } = await client.get(cutawaysEndpoint);
  return data;
};

export const requestNotebooksAndMenu = async () => {
  const { data } = await client.get('/notebooksAndMenu');
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
