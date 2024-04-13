import React, { useState } from 'react';
import styles from './Table.module.css';
import CreateBtn from "@/components/CreateBtn/CreateBtn";
import {faPencil as pencil, faTrashCan as trashCan} from "@fortawesome/free-solid-svg-icons";
import {User} from "@/components/UserManagment/UserManagment";
const usersData = [
    { id1C: '1C-001', name: 'Иван', surname: 'Иванов', email: 'ivanov@example.com', role: 'Администратор', action: 'Редактировать' },
    { id1C: '1C-002', name: 'Петр', surname: 'Петров', email: 'petrov@example.com', role: 'Пользователь', action: 'Редактировать' },
    { id1C: '1C-003', name: 'Сидор', surname: 'Сидоров', email: 'sidorov@example.com', role: 'Гость', action: 'Редактировать' },
    // Добавляем больше данных для демонстрации пагинации
    { id1C: '1C-004', name: 'Алексей', surname: 'Алексеев', email: 'alekseev@example.com', role: 'Пользователь', action: 'Редактировать' },
    { id1C: '1C-005', name: 'Николай', surname: 'Николаев', email: 'nikolaev@example.com', role: 'Гость', action: 'Редактировать' },
    { id1C: '1C-006', name: 'Мария', surname: 'Мариева', email: 'marieva@example.com', role: 'Администратор', action: 'Редактировать' },
    { id1C: '1C-007', name: 'Ольга', surname: 'Ольгина', email: 'olgina@example.com', role: 'Пользователь', action: 'Редактировать' },
    { id1C: '1C-008', name: 'Татьяна', surname: 'Татьянова', email: 'tatyanova@example.com', role: 'Гость', action: 'Редактировать' },
    { id1C: '1C-009', name: 'Сергей', surname: 'Сергеев', email: 'sergeev@example.com', role: 'Пользователь'},
    { id1C: '1C-010', name: 'Виктор', surname: 'Викторов', email: 'viktorov@example.com', role: 'Администратор'},
    { id1C: '1C-011', name: 'Дмитрий', surname: 'Дмитриев', email: 'dmitriev@example.com', role: 'Пользователь' },
    { id1C: '1C-012', name: 'Елена', surname: 'Еленова', email: 'elenova@example.com', role: 'Гость' },
    // Продолжайте добавлять данные по мере необходимости
];

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
                {usersData.map((user) => (
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