import { Request, Response } from "npm:express@4.18.2";
import client from "../db/client.ts";

const getCLient = async (req: Request, res: Response) => {
  try {
    const clients = await client.find().exec();
    res.status(200).send({clients});
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default getCLient;