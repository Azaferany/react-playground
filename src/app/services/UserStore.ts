interface User {
  id: number;
  name: string;
  age: number;
}

const localStorageItemKey = "Users";
export function Add(user: User): User {
  let users: User[] = JSON.parse(
    localStorage.getItem(localStorageItemKey) ?? "[]"
  );
  users.push(...[user]);
  localStorage.setItem(localStorageItemKey, JSON.stringify(users));
  return user;
}

export function Edit(user: User): User {
  let users: User[] = JSON.parse(
    localStorage.getItem(localStorageItemKey) ?? "[]"
  );
  let i = users.findIndex((x) => x.id == user.id);
  users[i] = user;
  localStorage.setItem(localStorageItemKey, JSON.stringify(users));
  return user;
}

export function GetList(): User[] {
  let users: User[] = JSON.parse(
    localStorage.getItem(localStorageItemKey) ?? "[]"
  );
  return users;
}

export function GetById(id: number): User | undefined {
  let users: User[] = JSON.parse(
    localStorage.getItem(localStorageItemKey) ?? "[]"
  );
  return users.find((x) => x.id == id);
}
export function Remove(id: number) {
  let users: User[] = JSON.parse(
    localStorage.getItem(localStorageItemKey) ?? "[]"
  );
  users = users.filter((x) => x.id != id);
  localStorage.setItem(localStorageItemKey, JSON.stringify(users));
}

export type { User };
