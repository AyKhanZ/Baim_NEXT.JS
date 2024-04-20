import SideBarLayout from "@/components/SideBarLayout/SideBarLayout";
import styles from "./PostPartner.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { Nunito } from "next/font/google";
import CreateBtn from "@/components/CreateBtn/CreateBtn";
import { faLeftLong as back } from "@fortawesome/free-solid-svg-icons";
import UploadImage from "@/components/UploadImage/UploadImage";

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

        if (!id1C) {
            alert("Please provide an id1C");
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
                            _id1C: id1C,
                            name,
                            description: desc,
                            img: base64Image,
                            imageFile,
                        }),
                    }
                );

                if (response.ok) {
                    await router.push("/managePartners");
                } else {
                    const text = await response.text();
                    console.error(
                        `Request failed with status code ${response.status} and body: ${text}`
                    );
                    alert("Error creating partner" + text);
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
                                onChange={(e) => setId1C(e.target.value)}
                                placeholder="Id 1C"
                                className={styles.input}
                                type="text"
                            />
                            <label className={styles.label}>Name</label>
                            <input
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name"
                                className={styles.input}
                                type="text"
                            />
                            <label className={styles.label}>Description</label>
                            <textarea
                                className={styles.inputDesc}
                                onChange={(e) => setDesc(e.target.value)}
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
