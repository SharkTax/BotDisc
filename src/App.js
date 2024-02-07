
import styles from'./App.css';
import { Person } from './components/Person';



function App() {

  return (
    <div className='App'>
      <Person
        name="Pedro"
        email="pedro@gmail.com"
        age={21}
        isMarried={true}
        friends = {["Jessica", "jake", "jerry", "jasmine"]}
      />
    </div>
  );
}

//4:28:08
export default App;
