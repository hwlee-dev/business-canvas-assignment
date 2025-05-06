import { STORAGE, STORAGE_KEY } from "@/constants/common";
import { StorageType } from "@/enums/common";
import { User } from "@/types/user";
import { create } from "zustand";

interface UserStore {
  users: User[];
  updateUsers: (users: User[]) => void;
  addUser: (user: User) => void;
  modifyUser: (user: User) => void;
  removeUser: (id: string) => void;
  initializeUsers: () => void; // 초기화 함수
}

const useUserStore = create<UserStore>((set, get) => ({
  users: [],

  initializeUsers: () => {
    switch (STORAGE) {
      case StorageType.LocalStorage:
        const userList = JSON.parse(
          window.localStorage.getItem(STORAGE_KEY) ?? "[]",
        ) as User[];
        set({ users: userList });
        break;
      default:
        break;
    }
  },

  updateUsers: (newUsers: User[]) => {
    set({ users: newUsers });
    switch (STORAGE) {
      case StorageType.LocalStorage:
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(newUsers));
        break;
      default:
        break;
    }
  },

  addUser: (user: User) => {
    const currentUsers = get().users;
    const newUsers = [...currentUsers, user];
    get().updateUsers(newUsers);
  },

  modifyUser: (user: User) => {
    const currentUsers = get().users;
    const newUsers = currentUsers.map((u) => (u.id === user.id ? user : u));
    get().updateUsers(newUsers);
  },

  removeUser: (id: string) => {
    const currentUsers = get().users;
    const newUsers = currentUsers.filter((u) => u.id !== id);
    get().updateUsers(newUsers);
  },
}));

export default useUserStore;
