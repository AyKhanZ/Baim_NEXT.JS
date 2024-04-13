import React, { useState } from "react";
import styles from "./UserManagment.module.css";
import Users from "@/icons/Users";
import Bell from "@/icons/Bell";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import CreateBtn from "@/components/CreateBtn/CreateBtn";
import Table from "@/components/Table/Table";
import Pagination from "@/components/Pagination/Pagination";

// Интерфейс для данных пользователя
export interface User {
  id1C: string; // Идентификатор пользователя в формате 1C
  name: string; // Имя пользователя
  surname: string; // Фамилия пользователя
  email: string; // Электронная почта пользователя
  role: string; // Роль пользователя
  action?: string; // Действие, доступное для пользователя (необязательное поле)
}

const UserManagement: React.FC = () => {
  // Состояние для хранения списка пользователей

  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle changes in the search input
  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };
  // Sample data
  const options = [
    { value: "A", label: "Option A" },
    { value: "B", label: "Option B" },
    { value: "C", label: "Option C" },
    { value: "D", label: "Option D" },
  ];

  const [selectedOption, setSelectedOption] = useState("");

  // Function to handle changes in the select dropdown
  const handleSelectChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedOption(event.target.value);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);
  interface User {
    id1C: string;
    name: string;
    surname: string;
    email: string;
    role: string;
    action?: string; // Сделаем поле action необязательным
  }

  // Допустим, у вас есть массив пользователей, который вы хотите отобразить
  const users:User[] = [{ id1C: '1C-001', name: 'Иван', surname: 'Иванов', email: 'ivanov@example.com', role: 'Администратор', action: 'Редактировать' },
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
    { id1C: '1C-012', name: 'Елена', surname: 'Еленова', email: 'elenova@example.com', role: 'Гость' },{ id1C: '1C-007', name: 'Ольга', surname: 'Ольгина', email: 'olgina@example.com', role: 'Пользователь', action: 'Редактировать' },
    { id1C: '1C-008', name: 'Татьяна', surname: 'Татьянова', email: 'tatyanova@example.com', role: 'Гость', action: 'Редактировать' },
    { id1C: '1C-009', name: 'Сергей', surname: 'Сергеев', email: 'sergeev@example.com', role: 'Пользователь'},

  ];

  // Вычисляем индексы для текущей страницы
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  // Получаем пользователей для текущей страницы
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Функция для изменения страницы
  const paginate = (pageNumber:number) => setCurrentPage(pageNumber);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.firstSection}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>
            <Users />
            <h3 className={styles.titleText}>All Users</h3>
          </div>
          <h4 className={styles.subText}>View, search for and add new user</h4>
        </div>
        <div className={styles.account}>
          <div className={styles.iconContainer}>
            <Bell />
          </div>

          <div className={styles.imgContainer}>
            <Image
              src=""
              alt="image"
              width={50}
              height={50}
              layout="fixed"
              objectFit="cover"
              objectPosition="center"
              className={styles.img}
            />
          </div>
          <div className={styles.userDetails}>
            <h4 className={styles.name}>Medina Abasova</h4>
            <h4 className={styles.positon}>FrontEnd Dev</h4>
          </div>
        </div>
      </div>
      <div className={styles.secondSection}>
        <div className={styles.firstLevel}>
          <div className={styles.leftPart}>
          <div className={styles.searchPart}>
            <h4 className={styles.subText}>Quick search a user</h4>
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
                className={styles.input}
              />
              <FaSearch  width={1} color="grey" className={styles.searchIcon} />
            </div>
          </div>
          <div className={styles.searchPart}>
                      <h4 className={styles.subText}>Filter users</h4>

                      <div >
                        <select
                            value={selectedOption}
                            onChange={handleSelectChange}
                            className={styles.filterBtn }
                        >
                          <option className={styles.subText} value="">All users</option>
                          {options.map((option) => (
                              <option className={styles.subText} key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div></div>
          <div>
            <CreateBtn title={"Create"} symbol={"+"} onClick={()=>{}}/>
          </div>
        </div>
        <div className={styles.secondLevel}>
          <div className={styles.listContainer}>
            <h3 className={styles.titleText}>All Users</h3>
            <div className={styles.table}>
              <Table users={currentUsers} /> {/* Передаем currentUsers в Table */}
              <Pagination currentPage={currentPage} totalPages={Math.ceil(users.length / usersPerPage)} paginate={paginate} />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};


export default UserManagement;
