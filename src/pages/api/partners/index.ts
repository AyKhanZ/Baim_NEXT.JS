import { Partner } from "@/types";
import PartnerModel from "../../../../lib/models/PartnersModel";
import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../../lib/db";

// Path: src/pages/api/partners/index.ts

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Partner[]>
) {
    await connectDB();

    if (req.method === "GET") {
        try {
            let partners = await PartnerModel.find();
            partners = partners.map((item) => {
                const imageBuffer = item.img;
                const imageBase64 = imageBuffer.toString("base64");
                item.combinedImage = `data:image/jpeg;base64${imageBase64}`;
                return item;
            });
            return res.status(200).json(partners);
        } catch (error: any) {
            console.error(error);
            return res.status(500).json({ error: "Error fetching partners" });
        }
    }

    if (req.method === "POST") {
        const { _id1C, name, description, img, imageFile } = req.body;
        const partner = new PartnerModel({
            _id1C,
            name,
            description,
            img,
            imageFile,
        });
        try {
            await partner.save();
            return res.status(201).json(partner);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Error creating partner" });
        }
    }

    if (req.method === "DELETE") {
        const { id } = req.body;
        try {
            const partner = await PartnerModel.findByIdAndDelete(id);
            return res.status(200).json(partner);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: "Error deleting partner" });
        }
    }
}
