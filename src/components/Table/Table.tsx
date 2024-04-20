import React, { useState } from 'react';
import styles from './Table.module.css';
import CreateBtn from "@/components/CreateBtn/CreateBtn";
import {faPencil as pencil, faTrashCan as trashCan} from "@fortawesome/free-solid-svg-icons";
import {User} from "@/components/UserManagment/UserManagment";

// Остальная часть компонента остается без изменений
interface TableProps {
    users: User[]; // Убедитесь, что тип User правильно импортирован или объявлен
}
const Table: React.FC<TableProps> = ({ users })=> {


    return (
        <>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th className={styles.header}>ID 1C</th>
                    <th className={styles.header}>Имя</th>
                    <th className={styles.header}>Фамилия</th>
                    <th className={styles.header}>Email</th>
                    <th className={styles.header}>Роль</th>
                    <th className={styles.header}>Действие</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id1C}>
                        <td className={styles.cell}>{user.id1C}</td>
                        <td className={styles.cell}>{user.name}</td>
                        <td className={styles.cell}>{user.surname}</td>
                        <td className={styles.cell}>{user.email}</td>
                        <td className={styles.cell}>{user.role}</td>
                        <td className={styles.cell}>
                            <div className={styles.btns}>
                                <CreateBtn
                                    onClick={() => {}}
                                    symbol={pencil}
                                    title="Edit"
                                />
                                <CreateBtn
                                    onClick={() => {}}
                                    symbol={trashCan}
                                    title="Delete"
                                />
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

        </>
    );
};

export default Table;