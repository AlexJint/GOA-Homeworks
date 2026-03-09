import Header from './Header';
import './App.css'

function App() {
  // კომპონმენტი არის კოდი რომელშიც ჩვენ შეგვიძლია შქევინახოთ ინფორმაცია და კიდევ კომპონენტი გავს ეიჩთიემელის კოდს ან ჯავასკრიპტის
  
  //2  ის გავს ეიჩტიემელს იმიტ რომ ჩვენ შეგვიძლია გამოვიყენოთ ეიჩთიემელის კოდი და შევუცვალოთ საზხელი 
//მაგალითათ

  let saxelidagvari = "alexi";
      return (
      
      <div>
        <Header></Header>
      <h2
        className="lomi"
        style={{
          fontSize: "40px",
          color: "green",
          border: "2px solid orange",
          borderRadius: "20px",
        }}
      >
        saxelidagvari {saxelidagvari}
      </h2>
    </div>
  )
}

export default App
