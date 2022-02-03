const getConnection = () => true;

export const SharedNetworkData = ({ render }) => {
  const isConnected = getConnection();

  return render(isConnected);
};
