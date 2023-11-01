import mongoose from "npm:mongoose@7.6.3";
import { Invoice } from "../types.ts";
const Schema = mongoose.Schema;

const invoiceSchema = new Schema(
  {
    client: { type: String, required: true },
    product: { type: Array, required: true },
    total: { type: Number, required: true },
  },
  { timestamps: false }
);

export type ProductsModelType = mongoose.Document & Omit<Invoice, "id">;

export default mongoose.model<ProductsModelType>("Invoice", invoiceSchema);