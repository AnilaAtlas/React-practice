import Student from "./assets/props";
function App() {
  return (
    <>
      <Student name="Alex peter" age= {18} isStudent={true} />
      <Student name="Adam" age={19} isStudent={true} />
      <Student name="Eric" age={28} isStudent={false} />
    </>
  );
}

export default App;
