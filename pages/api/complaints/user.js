import dbConnect from "../../../utils/dbConnect";
import Complaint from "../../../models/complaint";
import { authOptions } from "../auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth";

export default async function handler(req, res) {
  //   const { email } = session.user;

  const email = "elonmask2806@gmail.com";

  await dbConnect();
  if (req.method === "GET") {
    const session = await unstable_getServerSession(req, res, authOptions);

    console.log("hi", session);
    if (!session) {
      res.status(400).json({ success: false });
      return;
    }

    try {
      const complaints = await Complaint.find({ email: email });
      res.status(200).json({ success: true, data: complaints });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }

  // const complaints = await db.collection("complaints").find({});
  // .sort({ metacritic: -1 })
  // .limit(20)
  // .toArray();
}
