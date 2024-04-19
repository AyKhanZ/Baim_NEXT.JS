import { Partner } from "@/types";
import { useEffect, useState } from "react";
import styles from "./ManagePartners.module.css";
import SideBarLayout from "@/components/SideBarLayout/SideBarLayout";
import CreateBtn from "@/components/CreateBtn/CreateBtn";
import { faPencil as pencil } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan as trashCan } from "@fortawesome/free-solid-svg-icons";
import DeleteForm from "@/components/DeleteForm/DeleteForm";
import { useRouter } from "next/router";
import Image from "next/image";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

const ManagePartners = () => {
    const [partners, setPartners] = useState<Partner[]>([]);
    const [delPartnerId, setDelPartnerId] = useState(0);
    const [deleteShown, setDeleteShown] = useState(false);

    const router = useRouter();

    useEffect(() => {
        const fetchPartners = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3000/api/partners"
                );
                const data = await response.json();
                setPartners(data);
            } catch (error: any) {
                console.error(error);
            }
        };
        fetchPartners();
    }, []);

    const deletePartner = async (id: number) => {
        try {
            await fetch(`https://localhost:3000/api/partners/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });
            setPartners(partners.filter((item) => item._id !== id));
        } catch (error: any) {
            console.error(error);
        }
    };

    const showDelete = (pId: any) => {
        setDelPartnerId(pId);
        setDeleteShown((prev) => !prev);
    };

    const truncateText = (text: string, maxLength: number) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + "...";
        } else {
            return text;
        }
    };

    return (
        <SideBarLayout>
            <div className={`${nunito.className} ${styles.container}`}>
                <div
                    className={
                        deleteShown
                            ? `${styles.deleteForm}`
                            : `${styles.containerHidden}`
                    }
                >
                    <DeleteForm
                        setDeleteShown={setDeleteShown}
                        deleteThis={() => deletePartner(delPartnerId)}
                    />
                </div>
                <div
                    className={
                        deleteShown
                            ? styles.containerHidden
                            : styles.containerHeader
                    }
                >
                    <div className={styles.containerTitle}>
                        <div className={styles.iconContainer}>
                            <h1 className={styles.heading}>All partners</h1>
                            <Image
                                src="/partners.svg"
                                alt="Partner icon"
                                height={40}
                                width={40}
                            />
                        </div>
                        <CreateBtn
                            onClick={() => router.push("/postPartner")}
                            symbol="+"
                            title="Create"
                        />
                    </div>
                </div>
                <div
                    className={
                        deleteShown ? styles.containerHidden : styles.partners
                    }
                >
                    {partners.length > 0 ? (
                        partners.map((p: Partner) => (
                            <div className={styles.horizontal} key={p._id}>
                                {p.combinedImage == null ? (
                                    <div className={styles.imgContainer}></div>
                                ) : (
                                    <Image
                                        className={styles.imgContainer}
                                        src={p.combinedImage as string}
                                        alt="Partner image"
                                        width={280}
                                        height={220}
                                    />
                                )}

                                <div className={styles.partnerContent}>
                                    <div className={styles.partnerTitle}>
                                        <h2 className={styles.title}>
                                            {p.name}
                                        </h2>

                                        <div className={styles.btns}>
                                            <CreateBtn
                                                onClick={() =>
                                                    router.push(
                                                        `/managePartners/${p._id}`
                                                    )
                                                }
                                                symbol={pencil}
                                                title="Edit"
                                            />
                                            <CreateBtn
                                                onClick={() =>
                                                    showDelete(p._id)
                                                }
                                                symbol={trashCan}
                                                title="Delete"
                                            />
                                        </div>
                                    </div>

                                    <h2 className={styles.id}>
                                        Id 1C: {p.id1C}
                                    </h2>
                                    <p className={styles.desc}>
                                        {truncateText(p.description, 550)}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className={styles.containerNone}>
                            <p className={styles.noProductsText}>
                                No partners yet ƪ(˘⌣˘)ʃ
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </SideBarLayout>
    );
};
export default ManagePartners;
