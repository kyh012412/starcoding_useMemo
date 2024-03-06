import { useMemo, useState } from 'react';
import './App.css';

const hardCalculate = (number) => {
  console.log('어려운 계산!');
  for (let i = 0; i < 999999999; i++) {}
  return number + 10000;
};

const easyCalculate = (number) =>{
  console.log("짱 쉬운 계산");
  return number+1;
}

function App() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  // const hardSum = hardCalculate(hardNumber);

  /**
   * 두번째 인자에 있는 값이 바뀔때만 다시 계산을 한다.
   * 현재의 경우 hardNumber이 바뀔때만 hardSum을 다시계산
   */
  const hardSum = useMemo(()=>{
    return hardCalculate(hardNumber);
  },[hardNumber]);
  
  const easySum = easyCalculate(easyNumber);

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span> + 10000 = {hardSum}</span>

      <hr></hr>

      <h3>쉬운 계산기</h3>
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />
      <span> + 1 = {easySum}</span>
    </div>
  );
}

export default App;
