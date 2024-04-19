import SideBarLayout from "@/components/SideBarLayout/SideBarLayout";
import styles from "./PostPartner.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { Nunito } from "next/font/google";
import CreateBtn from "@/components/CreateBtn/CreateBtn";
import { faLeftLong as back } from "@fortawesome/free-solid-svg-icons";
import UploadImage from "@/components/UploadImage/UploadImage";
import CheckBox from "@/components/CheckBox/CheckBox";
import ComboBox from "@/components/ComboBox/ComboBox";

const nunito = Nunito({ subsets: ["latin"] });

const PostPartner = () => {
    const [id1C, setId1C] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [desc, setDesc] = useState<string>("");
    const [imageFile, setImageFile] = useState<File>();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!imageFile) {
            alert("Please select an image file");
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.onload = async () => {
            const base64Image = reader.result as string;

            try {
                const response = await fetch(
                    "http://localhost:3000/api/partners",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            id1C,
                            name,
                            description: desc,

                            combinedImage: base64Image,
                        }),
                    }
                );

                if (response.ok) {
                    router.push("/managePartners");
                } else {
                    const text = await response.text();
                    console.error(
                        `Request failed with status code ${response.status} and body: ${text}`
                    );
                    throw new Error("Error creating partner");
                }
            } catch (error) {
                console.error(error);
                alert("Error creating partner");
            }
        };
    };

    return (
        <SideBarLayout>
            <div className={`${nunito.className} ${styles.container}`}>
                <div className={styles.products}>
                    <div className={styles.containerTitle}>
                        <h1 className={styles.heading}>Add new partner</h1>
                        <div className={styles.btns}>
                            <CreateBtn
                                onClick={() => router.push("/managePartners")}
                                symbol={back}
                                title="Back"
                            />
                            <CreateBtn
                                onClick={handleSubmit}
                                symbol="+"
                                title="Create"
                            />
                        </div>
                    </div>
                    <div className={styles.form}>
                        <div className={styles.inputs}>
                            <label className={styles.label}>Id 1C</label>
                            <input
                                onChange={(ev) => setId1C(ev.target.value)}
                                placeholder="Id 1C"
                                className={styles.input}
                                type="text"
                            />
                            <label className={styles.label}>Name</label>
                            <input
                                onChange={(ev) => setName(ev.target.value)}
                                placeholder="Name"
                                className={styles.input}
                                type="text"
                            />
                            <label className={styles.label}>Description</label>
                            <textarea
                                className={styles.inputDesc}
                                onChange={(ev) => setDesc(ev.target.value)}
                                placeholder="Description"
                            />
                        </div>
                        <div className={styles.imageContainer}>
                            <label className={styles.label}>Image</label>
                            <UploadImage setImg={setImageFile} />
                        </div>
                    </div>
                </div>
            </div>
        </SideBarLayout>
    );
};
export default PostPartner;
