/* 
    id1C: string;
    name: string;
    description: string;
    combinedImage: string;
    imageFile: File;
*/

import mongoose, { Schema } from "mongoose";
import { Partner } from "@/types";

const partnerSchema = new Schema<Partner>({
    id1C: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String },
    combinedImage: { type: String, required: true },
    imageFile: { type: String },
});

const PartnerModel =
    mongoose.models.Partner || mongoose.model("Partner", partnerSchema);

export default PartnerModel;
