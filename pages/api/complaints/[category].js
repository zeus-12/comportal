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
    const { category, description, title, links, name, email } = req.body;
    if (!category || !description || !title || !name || !email) {
      res.status(400).json({ success: false });
      return;
    }

    try {
      await Complaint.create({
        category,
        description,
        title,
        links,
        name,
        email,
      });
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(400).json({ success: false });
    }
  }
}
