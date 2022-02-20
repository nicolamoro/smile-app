export const baseApiUrl = process.env.REACT_APP_BASE_API_URL || "";

const LOCAL_STORAGE = "smile-app";

const config = {
  localStorage: LOCAL_STORAGE,
  apis: {
    login: `${baseApiUrl}/api/1/login`,
  },
};

export default config;
