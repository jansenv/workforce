let computers = [];

export const getComputers = () => {
  return fetch("http://localhost:3000/computers")
    .then(res => {
      return res.json();
    })
    .then(parsedComputers => {
      return (computers = parsedComputers);
    });
};

export const useComputers = () => {
  return computers.slice();
};
