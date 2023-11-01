import { Request, Response } from "npm:express@4.18.2";
import products from "../db/products.ts";

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const product = await products.findOneAndDelete(_id).exec();
    if (!product) {
      res.status(404).send("Product not found");
      return;
    }
    res.status(200).send("Product deleted");
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default deleteProduct;