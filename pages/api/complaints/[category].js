import dbConnect from "../../../utils/dbConnect";
import Complaint from "../../../models/complaint";
import { useRouter } from "next/router";
import { allowedCategories } from "../../../utils/helper";

export default async function handler(req, res) {
  const router = useRouter();
  const { category } = router.query;

  if (!allowedCategories.includes(category)) {
    res.status(400).json({ success: false });
    return;
  }

  await dbConnect();
  if (req.method === "GET") {
    try {
      const complaints = await Complaint.find({ category });
      res.status(200).json({ success: true, data: complaints });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else if (method == "POST") {
    console.log(req.body);
    const newComplaint = await Complaint.create(req.body);
    console.log(newComplaint);
  }
}
