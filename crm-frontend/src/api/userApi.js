import axios from "axios";
const rootUrl = "http://localhost:3001/v1/";
const loginUrl = rootUrl + "user/login";
const userProfileUrl = rootUrl + "user/";
const logOutUrl = rootUrl + "user/logout";
export const userLogin = (frmData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(loginUrl, frmData);
      console.log(res);
      if (res.status === 200) {
        console.log("HAHA");
        sessionStorage.setItem("accessJWT", res.data.jwt);
        localStorage.setItem(
          "crmSite",
          JSON.stringify({ resfreshJWT: res.data.refJWT })
        );
      }

      resolve(res.data);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};

export const fetchUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessJWT = sessionStorage.getItem("accessJWT");
      if (!accessJWT) {
        reject("Token not found");
      }
      const res = await axios.get(userProfileUrl, {
        headers: {
          Authorization: accessJWT,
        },
      });

      resolve(res.data);
    } catch (error) {
      console.log(error);
      reject(error.message);
    }
  });
};

export const logOutUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessJWT = sessionStorage.getItem("accessJWT");
      await axios.delete(logOutUrl, {
        headers: {
          Authorization: accessJWT,
        },
      });
   
    } catch (error) {
      console.log(error);
      reject(error.message);
    }
  });
};
