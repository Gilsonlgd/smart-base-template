interface AuthData {
  token: string | null;
  roles: number[] | null;
  userId: number | string | null;
}

interface UserInfo {
  id: number;
  name: string | null;
  email: string;
  role: string;
}

const AUTH_KEY = '@ucorp-Auth';
const USER_INFO_KEY = '@ucorp-UserInfo';

const getAuthData = (): AuthData => {
  const data = localStorage.getItem(AUTH_KEY);
  if (data) {
    return JSON.parse(data) as AuthData;
  }
  return { token: null, roles: null, userId: null };
};

const setAuthData = (data: AuthData): void => {
  localStorage.setItem(AUTH_KEY, JSON.stringify(data));
};

export const isAuthenticated = (): boolean => {
  const authData = getAuthData();
  return authData.token !== null;
};

export const hasRole = (): boolean => {
  const authData = getAuthData();
  return authData.roles !== null;
};

export const checkRole = (role: number): boolean => {
  const authData = getAuthData();
  return authData.roles !== null && authData.roles.includes(role);
};

export const getToken = (): string | null => {
  const authData = getAuthData();
  return authData.token;
};

export const getRoles = (): number[] | null => {
  const authData = getAuthData();
  return authData.roles;
};

export const getUserId = (): number | string | null => {
  const authData = getAuthData();
  return authData.userId;
};

export const storeUserInfo = (
  id: number,
  name: string | null,
  email: string,
  role: string,
): void => {
  const userInfo: UserInfo = { id, name, email, role };
  localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo));
};

export const setUserInfo = (userInfo: UserInfo): void => {
  localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo));
};

export const getUserInfo = (): UserInfo | null => {
  const data = localStorage.getItem(USER_INFO_KEY);
  if (data) {
    return JSON.parse(data) as UserInfo;
  }
  return null;
};

export const updateUserEmail = (email: string): void => {
  const userInfo = getUserInfo();
  if (userInfo) {
    userInfo.email = email;
    localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo));
  }
};

export const signIn = (
  token: string,
  roles: number[] | null,
  userId: string | null,
): void => {
  const authData: AuthData = { token, roles, userId };
  setAuthData(authData);
};

export const signOut = (): void => {
  localStorage.removeItem(AUTH_KEY);
  localStorage.removeItem(USER_INFO_KEY);
  window.location.href = '/';
};
