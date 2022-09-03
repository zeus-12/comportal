import dbConnect from "../../../utils/dbConnect";
import Complaint from "../../../models/complaint";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();
  if (method === "GET") {
    try {
      const complaints = await Complaint.find({});
      res.status(200).json({ success: true, data: complaints });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else if (method == "POST") {
    console.log(req.body);
    const newComplaint = await Complaint.create(req.body);
  }

  // const complaints = await db.collection("complaints").find({});
  // .sort({ metacritic: -1 })
  // .limit(20)
  // .toArray();
}
