interface Product {
  id: number;
  name: string;
  description: string;
  count: number;
}

const localStorageItemKey = "Products";
export function Add(product: Product): Product {
  const products: Product[] = JSON.parse(
    localStorage.getItem(localStorageItemKey) ?? "[]"
  );
  products.push(...[product]);
  localStorage.setItem(localStorageItemKey, JSON.stringify(products));
  return product;
}

export function Edit(product: Product): Product {
  const products: Product[] = JSON.parse(
    localStorage.getItem(localStorageItemKey) ?? "[]"
  );
  const i = products.findIndex((x) => x.id == product.id);
  products[i] = product;
  localStorage.setItem(localStorageItemKey, JSON.stringify(products));
  return product;
}

export function GetList(): Product[] {
  const products: Product[] = JSON.parse(
    localStorage.getItem(localStorageItemKey) ?? "[]"
  );
  return products;
}

export function GetById(id: number): Product | undefined {
  const products: Product[] = JSON.parse(
    localStorage.getItem(localStorageItemKey) ?? "[]"
  );
  return products.find((x) => x.id == id);
}
export function Remove(id: number) {
  let products: Product[] = JSON.parse(
    localStorage.getItem(localStorageItemKey) ?? "[]"
  );
  products = products.filter((x) => x.id != id);
  localStorage.setItem(localStorageItemKey, JSON.stringify(products));
}

export type { Product };
