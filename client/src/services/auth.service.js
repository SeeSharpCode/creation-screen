import jwtDecode from "jwt-decode";

export default {
  getLoggedInUser() {
    const accessToken = localStorage.getItem("accessToken");
    return accessToken !== "null" ? jwtDecode(accessToken[1].username : null;
  }
};
