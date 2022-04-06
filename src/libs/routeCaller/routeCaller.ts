import { CustomError } from '@utilities/CustomError';

export const routeCaller = async (
  f: any,
  res: any,
  next: any,
  ...params: any
) => {
  try {
    let result = await f(...params);
    return res.json(result);
  } catch (e: any) {
    console.log("there was an error: " + e);
    let err = new CustomError(400, e.message);
    console.log(err);
    res.status(err.status).json(err);
  }
};
