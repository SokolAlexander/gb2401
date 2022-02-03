const getConnection = () => true;

export const useNetworkData = () => {
  const connection = getConnection();

  return {
    connection,
  };
};
