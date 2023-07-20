import logo from './logo.svg';
import './App.css';
//inline styling
function App() {
  
  return (
    <section style={{
      fontFamily: '-apple-system',
      fontSize: '1rem',
      fontWeight: 1.5,
      lineHeight: 1.5,
      color: "#292b2c",
      padding:"0 2em"
    }}>
      <div style={{
        textAlign: "center",
        maxWidth: "950px",
        margin: "0 auto",
        border: "1px solid #e6e6e6",
        padding: "40px 25px",
        marginTop: "50px"
      }}>
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="John Miller"
          style={{
            margin: "-90px auto 30px",
            width: "100px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom:"0"
          }}
        />
        <div>
          <p style={{
            lineHeight: 1.5,
            fontWeight: 300,
            marginBottom: "25px",
            fontSize:"1.375rem"
          }}>
            
            About me : I am a John Miller from US, Full Stack Developer. My
            Hobies is coding.
          </p>
        </div>
        <p style={{
          marginBottom: "0",
          fontWeight: 600,
          fontSize:"1rem"
        }}>
          John Miller
          <span style={{ fontWeight:400 }}> . Full Stack Developer</span>
        </p>
      </div>
    </section>
  );
}

export default App;
