import { User } from "@/types/user";

export function getUserFilters(users: User[]): Record<keyof User, any[]> {
  const map = new Map();
  users.forEach((user) => {
    Object.keys(user).forEach((key) => {
      if (map.has(key)) {
        map.set(key, [...map.get(key), user[key as keyof User]]);
      } else {
        map.set(key, [user[key as keyof User]]);
      }
    });
  });

  return Object.fromEntries(map);
}
