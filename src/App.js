import "./App.css";
import AppRouter from "./AppRouter";
import Footer from "./components/Footer";
import NavBar from "./routes/navigation/NavBar";


const phantom = {
  display: 'block',
  padding: '80px',
  height: '100%',
  width: '100%'
}

function App() {
  return (
    <div className="App">
      
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
        crossorigin="anonymous"
      ></link>
      
    <NavBar/>
      <AppRouter/>
      <div style={phantom} />
      <Footer />
    </div>
  );
}

export default App;
