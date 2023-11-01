import { Request, Response } from "npm:express@4.18.2";
import invoice from "../db/invoice.ts";

const getInvoice = async (req: Request, res: Response) => {
  try {
    const invoices = await invoice.find().exec();
    res.status(200).send({invoices});
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default getInvoice;