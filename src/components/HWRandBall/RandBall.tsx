import {useState} from 'react';
import './App.css';
import NumBall from './components/NumBall/NumBall';

const RandBall = () => {
  const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

  const getRandNumbers = (): void => {
    const newNumbers: number[] = [];
    while (newNumbers.length < numbers.length) {
      const newNumber: number = Math.floor(Math.random() * (37 - 5) + 5);
      let check: boolean = false;
      if (newNumbers.length > 0) {
        for (let i: number = 0; i < newNumbers.length; i++) {
          if (newNumber === newNumbers[i]) {
            check = true;
            break;
          }
        }
      }
      if (!check) {
        newNumbers.push(newNumber);
      }
    }
    setNumbers(newNumbers.sort((a, b) => {
      return a - b;
    }));
  };

  return (
    <div className="d-flex align-items-center justify-content-center flex-column p-5">
      <div className="num-ball">
        {numbers.map((number: number, index: number) => {
          return <NumBall number={number} key={index + number}/>;
        })}
      </div>
      <button className="btn btn-outline-primary" onClick={getRandNumbers}>New numbers</button>
    </div>
  );
};

export default RandBall;
