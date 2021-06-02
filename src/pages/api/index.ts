import { Request, Response } from "express";

import Cors from "cors";
import runMiddleware from "expmidd";
import FirebaseController from "./controller";

const cors = Cors({
  methods: ["GET", "HEAD", "POST", "PUT", "DELETE"],
});

async function handler(req: Request, res: Response) {
  if (req.method === "GET") {
    const { collection, doc } = req.query;
    await runMiddleware(req, res, cors);
    await FirebaseController.read(req, res, collection, doc);
  }
}

export default handler;
