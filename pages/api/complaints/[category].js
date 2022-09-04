import dbConnect from "../../../utils/dbConnect";
import Complaint from "../../../models/complaint";
import { allowedCategories } from "../../../utils/helper";

export default async function handler(req, res) {
  const category = req.query.category;

  if (!allowedCategories.includes(category)) {
    res.status(400).json({ success: false });
    return;
  }

  await dbConnect();
  if (req.method === "GET") {
    try {
      const complaints = await Complaint.find({ category });
      res
        .status(200)
        .json({ success: true, data: JSON.parse(JSON.stringify(complaints)) });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else if (req.method == "POST") {
    try {
      await Complaint.create(req.body);
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(400).json({ success: false });
    }
  }
}
