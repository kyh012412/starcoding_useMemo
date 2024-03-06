import { useMemo, useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  const location = isKorea ? '한국' : '외국' ;

  return (
    <div>
      <h2>하루에 몇 끼 먹어요?</h2>
      <input type='number' value={number}
      onChange={e=>setNumber(e.target.value)}
    />
    <hr/>
      <h2>어느 나라에 있어요?</h2>
      <p>나라: {location}</p>
      <button onClick={()=>setIsKorea(!isKorea)}>비행기</button>
    </div>
  );
}

export default App;
