import Center from "../models/Center.js";

export const createCenter = async (req, res) => {
  try {
    const center = new Center(req.body);

    await center.save();

    res.json(center);
  } catch (error) {
    res.status(500).json({ message: "Error creating center" });
  }
};

export const getCenters = async (req, res) => {
  const centers = await Center.find();

  res.json(centers);
};
