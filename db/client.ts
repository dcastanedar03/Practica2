import mongoose from "npm:mongoose@7.6.3";
import { Client } from "../types.ts";

const Schema = mongoose.Schema;

const clientSchema = new Schema(
  {
    name: { type: String, required: true },
    cif: { type: String, required: true },
  },
  { timestamps: false }
);

export type ClientsModelType = mongoose.Document & Omit<Client, "id">;

export default mongoose.model<ClientsModelType>("Client", clientSchema);