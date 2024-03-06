import { useEffect, useMemo, useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  //location은 app이 다시호출될때 같아보여도 서로 다른 주소를 가지게 되고 다른것으로 인식되어서 useEffect가 재호출된다.
  
  const location = useMemo(()=>{
    return  {
        country :isKorea ? '한국' : '외국',
      };
  },[isKorea]);
  
  useEffect(()=>{
    console.log('useEffect 호출');
  },[isKorea]);

  return (
    <div>
      <h2>하루에 몇 끼 먹어요?</h2>
      <input type='number' value={number}
      onChange={e=>setNumber(e.target.value)}
    />
    <hr/>
      <h2>어느 나라에 있어요?</h2>
      <p>나라: {location.country}</p>
      <button onClick={()=>setIsKorea(!isKorea)}>비행기 </button>
    </div>
  );
}

export default App;
