import axios from "axios";
export const getAllTickets = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessJWT = sessionStorage.getItem("accessJWT")
      const result = await axios.get("http://localhost:3001/v1/ticket/", {
        headers: {
          Authorization: accessJWT
            
        },
      });
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
