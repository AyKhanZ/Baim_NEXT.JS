import mongoose, { Schema } from "mongoose";
import { Partner } from "@/types";

const partnerSchema = new Schema<Partner>({
    _id1C: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    img: { type: String, required: true },
    imageFile: { type: String },
});

const PartnerModel =
    mongoose.models.Partner || mongoose.model("Partner", partnerSchema);

export default PartnerModel;
