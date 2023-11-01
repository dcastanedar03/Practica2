import { Request, Response } from "npm:express@4.18.2";
import invoice from "../db/invoice.ts";

const invoicepost = async (req: Request, res: Response) => {
    try {
      const { client, product, total } = req.body;
      if (!client || !product ) {
        res.status(400).send("CLient and product are required");
        return;
      }
  
      const alreadyExists = await invoice.findOne({client});
      if (alreadyExists) {
        res.status(400).send("Invoice already exists");
        return;
      }
  
      const newInvoice = new invoice({ client, product, total});
      await newInvoice.save();
  
      res.status(200).send({
        client: newInvoice.client,
        product: newInvoice.client,
        total: newInvoice.client,
        id:newInvoice._id.toString(),
      });
    } catch (error) {
      res.status(500).send(error.message);
      return;
    }
  };
  export default invoicepost;