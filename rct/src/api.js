import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export const authenticate = async () => {
  try {
    await pb.admins.authWithPassword('admin@email.com', 'rootpassword');
  } catch (error) {
    throw new Error('Authentication failed');
  }
};

export const getCryptoList = async () => {
  try {
    return await pb.collection('cryptocurrencies').getFullList();
  } catch (error) {
    throw new Error('Failed to fetch Crypto list');
  }
};

export const createCrypto = async (data) => {
  try {
    return await pb.collection('cryptocurrencies').create(data);
  } catch (error) {
    throw new Error('Failed to create cryptocurrencies');
  }
};

export const updateCrypto = async (id, data) => {
  try {
    return await pb.collection('cryptocurrencies').update(id, data);
  } catch (error) {
    throw new Error('Failed to update cryptocurrencies');
  }
};

export const deleteCrypto = async (id) => {
  try {
    await pb.collection('cryptocurrencies').delete(id);
  } catch (error) {
    throw new Error('Failed to delete cryptocurrencies');
  }
};
