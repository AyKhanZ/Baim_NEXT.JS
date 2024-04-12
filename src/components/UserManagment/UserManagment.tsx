import React, { useState } from "react";
import styles from "./UserManagment.module.css";
import Users from "@/icons/Users";
import Bell from "@/icons/Bell";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

// Интерфейс для данных пользователя
interface User {
  id: number;
  name: string;
  email: string;
}

const UserManagement: React.FC = () => {
  // Состояние для хранения списка пользователей
  const [users, setUsers] = useState<User[]>([]);

  // Функция для добавления нового пользователя
  const addUser = (userData: User) => {
    setUsers([...users, userData]);
  };

  // Функция для удаления пользователя
  const deleteUser = (userId: number) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  // Функция для обновления информации о пользователе
  const updateUser = (userId: number, updatedUserData: Partial<User>) => {
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, ...updatedUserData } : user
      )
    );
  };
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
          <div className={styles.searchPart}>
            <h4 className={styles.name}>Quick search a user</h4>
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
                className={styles.input}
              />
              <FaSearch width={1} color="grey" className="search-icon" />
            </div>
          </div>
          <div className={styles.searchPart}>
            <h4 className={styles.name}>Filter users</h4>
            <div className="filterable-select-container">
              <select
                value={selectedOption}
                onChange={handleSelectChange}
                className={styles.searchContainer}
              >
                <option value="">All users</option>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* <h2>User Management</h2> */}
      {/* Форма для добавления нового пользователя */}
      {/* <UserForm addUser={addUser} /> */}
      {/* Список пользователей */}
      {/* <UserList users={users} deleteUser={deleteUser} updateUser={updateUser} /> */}
    </div>
  );
};

// // Компонент для формы добавления пользователя
// const UserForm: React.FC<{ addUser: (userData: User) => void }> = ({
//   addUser,
// }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Генерация уникального ID для нового пользователя
//     const userId = Math.floor(Math.random() * 1000);
//     // Создание объекта с данными нового пользователя
//     const userData: User = { id: userId, name, email };
//     // Добавление нового пользователя в список
//     addUser(userData);
//     // Сброс формы
//     setName("");
//     setEmail("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Name"
//         required
//       />
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//         required
//       />
//       <button type="submit">Add User</button>
//     </form>
//   );
// };

// // Компонент для отображения списка пользователей
// const UserList: React.FC<{
//   users: User[];
//   deleteUser: (userId: number) => void;
//   updateUser: (userId: number, updatedUserData: Partial<User>) => void;
// }> = ({ users, deleteUser, updateUser }) => {
//   return (
//     <ul>
//       {users.map((user) => (
//         <li key={user.id}>
//           <div>Name: {user.name}</div>
//           <div>Email: {user.email}</div>
//           <button onClick={() => deleteUser(user.id)}>Delete</button>
//           {/* Форма для изменения информации о пользователе */}
//           <UserUpdateForm updateUser={updateUser} userId={user.id} />
//         </li>
//       ))}
//     </ul>
//   );
// };

// // Компонент для формы изменения информации о пользователе
// const UserUpdateForm: React.FC<{
//   updateUser: (userId: number, updatedUserData: Partial<User>) => void;
//   userId: number;
// }> = ({ updateUser, userId }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Обновление информации о пользователе
//     updateUser(userId, { name, email });
//     // Сброс формы
//     setName("");
//     setEmail("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="New Name"
//       />
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="New Email"
//       />
//       <button type="submit">Update</button>
//     </form>
//   );
// };

export default UserManagement;
