import Complaint from "../../../models/complaint";
import dbConnect from "../../../utils/dbConnect";
import getServerSession from "../../../utils/getServerSession";

async function handler(req, res) {
  const session = await getServerSession(req, res);
  if (!session) {
    res.status(401).json({ message: "You must be logged in." });
    return;
  }

  await dbConnect();
  try {
    const complaints = await Complaint.find({
      email: session.user.email,
    }).lean();
    res
      .status(200)
      .json({ success: true, data: JSON.parse(JSON.stringify(complaints)) });
  } catch (error) {
    res.status(400).json({ success: false });
  }
  return;
}

export default handler;
