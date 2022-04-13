export const examplePromiseFunction = (param1: string, param2: number) => {
  return new Promise(async (resolve, reject): Promise<any> => {
    try {
      const objs = {
        parma1: param1,
        parma2: param2,
      };
      resolve(objs);
    } catch (e) {
      reject(e);
    }
  });
};

export function getFirstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

export const sumElement = (arr: [number]): number => {
  let total = 0;
  arr.forEach((i) => (total += i));
  return total;
};

export const expiredTimeFunction = (time: number) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};
