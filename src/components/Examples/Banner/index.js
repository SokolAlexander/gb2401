// export const Banner = () => {
//   const isConnected = getConnection();

import { SharedNetworkData } from "./SharedNetworkData";

//   if (isConnected) {
//     return null;
//   }

//   return <div />;
// };

// export const Warning = () => {
//   const isConnected = getConnection();

//   if (isConnected) {
//     return null;
//   }

//   return <span />;
// };

// export const ButtonWithNetwork = () => {
//   const isConnected = getConnection();

//   if (isConnected) {
//     return null;
//   }

//   return <button />;
// };

export const Banner = () => {
  return (
    <SharedNetworkData
      render={(isConnected) => {
        if (!isConnected) {
          return null;
        }

        return <div />;
      }}
    />
  );
};
