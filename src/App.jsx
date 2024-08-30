import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css'
import "./global.css";

export default function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Marcio Souza"
            content="Olá deve como vai os seus estudos!"
          />
        </main>
      </div>
    </div>
  );
}

