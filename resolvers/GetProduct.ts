import { Request, Response } from "npm:express@4.18.2";
import products from "../db/products.ts";

const getProduct = async (req: Request, res: Response) => {
  try {
    const product = await products.find().exec();
    res.status(200).send({product});
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default getProduct;