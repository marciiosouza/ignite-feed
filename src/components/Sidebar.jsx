import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'

export function Sidebar () {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className={styles.profile}>
        <img
          src="https://github.com/marciiosouza.png"
          className={styles.avatar}
        />
        <strong>Marcio Souza</strong>
        <span>Front-end Developer</span>
      </div>

      <footer>
        <a href="#"> 
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}