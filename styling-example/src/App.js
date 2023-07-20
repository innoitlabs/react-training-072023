import logo from './logo.svg';
//import './App.css';
import styles from './styles.module.css';
import styled from 'styled-components';

//inline styling
function App() {
  const Button = styled.button`
  color:limegreen;
  border:2px solid limegreen;
  font-size: 1em;
  margin:1em;
  padding:0.25em 1em;
  border-radius: 3px;
  `;
  return (
    <section className={styles['profile-container']}>
      <div className={styles['profile-wrapper']}>
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="John Miller"
          className={styles['profile-avatar']}
        />
        <div>
          <p className={styles["profile-quote"]}>
            About me : I am a John Miller from US, Full Stack Developer. My
            Hobies is coding.
          </p>
        </div>
        <p className={styles["profile-name"]}>
          John Miller
          <span style={{ fontWeight: 400 }}> . Full Stack Developer</span>
        </p>
      </div>
      <Button>Click</Button>
    </section>
  );
}

export default App;
