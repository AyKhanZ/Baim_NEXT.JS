import SideBarLayout from "@/components/SideBarLayout/SideBarLayout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import { Nunito } from "next/font/google";
import styles from "./EditId.module.css";
import CreateBtn from "@/components/CreateBtn/CreateBtn";
import { faPencil as pencil } from "@fortawesome/free-solid-svg-icons";
import { faLeftLong as back } from "@fortawesome/free-solid-svg-icons";
import UploadImage from "@/components/UploadImage/UploadImage";

const nunito = Nunito({ subsets: ["latin"] });

const EditPartner = () => {
    const [id1C, setId1C] = useState("");
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState("");
    const [imageFile, setImageFile] = useState<File>();
    const router = useRouter();
    const params = useParams();

    const getPartner = async (id: number) => {
        try {
            const response = await fetch(
                `http://localhost:3000/api/partners/ById/${id}`
            );
            const data = await response.json();

            setImg(data.image);
            setId1C(data.id1C);
            setName(data.name);
            setDesc(data.description);
        } catch (error: any) {
            console.error(error);
        }
    };

    useEffect(() => {
        getPartner(Number(params.editId));
    }, [params]);

    const edit = async (id: number) => {
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
                    `http://localhost:3000/api/partners/${id}`,
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            id1C: id1C,
                            name: name,
                            description: desc,
                            image: base64Image,
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
                        <h1 className={styles.heading}>Edit the partner</h1>

                        <div className={styles.btns}>
                            <CreateBtn
                                onClick={() =>
                                    edit(
                                        Number(
                                            router.query.editId?.toString() ??
                                                ""
                                        )
                                    )
                                }
                                symbol={pencil}
                                title="Edit"
                            />
                            <CreateBtn
                                onClick={() => router.push("/managePartners")}
                                symbol={back}
                                title="Back"
                            />
                        </div>
                    </div>

                    <div className={styles.form}>
                        <div className={styles.inputs}>
                            <label className={styles.label}>Id 1C</label>
                            <input
                                className={styles.input}
                                defaultValue={id1C}
                                onChange={(ev) => setId1C(ev.target.value)}
                                placeholder="Id 1C"
                                type="text"
                            />
                            <label className={styles.label}>Name</label>
                            <input
                                className={styles.input}
                                defaultValue={name}
                                onChange={(ev) => setName(ev.target.value)}
                                placeholder="Partners name"
                                type="text"
                            />
                            <label className={styles.label}>Description</label>
                            <textarea
                                className={styles.inputDesc}
                                defaultValue={desc}
                                onChange={(ev) => setDesc(ev.target.value)}
                                placeholder="Partners description"
                            />
                        </div>
                        <div className={styles.imageContainer}>
                            <label className={styles.label}>Image</label>
                            <UploadImage setImg={setImageFile} img={img} />
                        </div>
                    </div>
                </div>
            </div>
        </SideBarLayout>
    );
};

export default EditPartner;
