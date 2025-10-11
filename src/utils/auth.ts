export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem("admin_token");
};

export const logout = (): void => {
  localStorage.removeItem("admin_token");
};

export const login = (token: string): void => {
  localStorage.setItem("admin_token", token);
};