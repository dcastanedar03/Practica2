import express from "npm:express@4.18.2";
import mongoose from "npm:mongoose@7.6.3";

import productspost from "./resolvers/PostProducts.ts";
import clientpost from "./resolvers/PostClient.ts";
import invoicepost from "./resolvers/PostInvoice.ts";
import getProduct from "./resolvers/GetProduct.ts";
import getCLient from "./resolvers/GetClient.ts";
import getInvoice from "./resolvers/GetInvoice.ts";
import deleteProduct from "./resolvers/DeleteProduct.ts";
import deleteClient from "./resolvers/DeleteCLient.ts";

import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";

const env = await load();

const MONGO_URL = env.MONGO_URL || Deno.env.get("MONGO_URL");

if (!MONGO_URL) {
    console.log("No mongo URL found");
    Deno.exit(1);
  }

  
 await mongoose.connect(MONGO_URL);
  

  const app = express();

  app.use(express.json());
  app
    .post("/products", productspost)
    .get("/products", getProduct)
    .delete("/products/:id", deleteProduct)
    .post("/client", clientpost)
    .get("/client", getCLient)
    .delete("/client/:id", deleteClient)
    .post("/invoice", invoicepost)
    .get("/invoice/:id", getInvoice)

app.listen(3001);
