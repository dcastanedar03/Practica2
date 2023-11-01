import { Request, Response } from "npm:express@4.18.2";
import client from "../db/client.ts";

const deleteClient = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const clients = await client.findOneAndDelete(_id).exec();
    if (!clients) {
      res.status(404).send("Client not found");
      return;
    }
    res.status(200).send("Client deleted");
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default deleteClient;