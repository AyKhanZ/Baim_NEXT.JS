import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../../../lib/db";
import PartnerModel from "../../../../../lib/models/PartnersModel";

const getById = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await connectDB();

        if (req.method === "GET") {
            const id = typeof req.query.id === "string" ? req.query.id : "";
            const partner = await PartnerModel.findById(id);
            if (!partner) {
                return res.status(404).json({ error: "Partner not found" });
            }
            return res.status(200).json(partner);
        }
    } catch (error) {
        return res.status(500).json({ error: "Error fetching partner" });
    }
};

const updateById = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await connectDB();

        if (req.method === "PUT") {
            const { id1C, name, description, combinedImage, imageFile } =
                req.body;
            const id = typeof req.query.id === "string" ? req.query.id : "";
            const partner = await PartnerModel.findByIdAndUpdate(id, {
                id1C,
                name,
                description,
                combinedImage,
                imageFile,
            });
            if (!partner) {
                return res.status(404).json({ error: "Partner not found" });
            }
            partner.save();
            return res.status(200).json(partner);
        }
    } catch (error) {
        return res.status(500).json({ error: "Error updating partner!" });
    }
};

const deleteById = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await connectDB();

        if (req.method === "DELETE") {
            const id = typeof req.query.id === "string" ? req.query.id : "";
            const partner = await PartnerModel.findByIdAndDelete(id);
            if (!partner) {
                return res.status(404).json({ error: "Partner not found" });
            }
            return res.status(200).json(partner);
        }
    } catch (error) {
        return res.status(500).json({ error: "Error deleting partner" });
    }
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        return getById(req, res);
    }

    if (req.method === "PUT") {
        return updateById(req, res);
    }

    if (req.method === "DELETE") {
        return deleteById(req, res);
    }
}
