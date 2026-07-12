export function getAccessToken() {
  if (typeof window === "undefined") {
    return null;
  }

  return localStorage.getItem("accessToken");
}

export function isAuthenticated() {
  return !!getAccessToken();
}

export function logout() {
  localStorage.removeItem("accessToken");
}

export function getAuthHeader() {
  const token = getAccessToken();

  return {
    Authorization: `Bearer ${token}`,
  };
}