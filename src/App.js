import { Header } from './stories/Header';
import { TestCard } from './stories/Card';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className={'position'}>
        <TestCard />
      </div>
    </div>
  );
}

export default App;
