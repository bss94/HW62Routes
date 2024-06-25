import './NumBall.css';

interface Props {
  number: number;
}

const NumBall = (props: Props) => {
  return (
    <div>
      <div className="ball">
        <h1 className="num">{props.number}</h1>
      </div>
    </div>
  );
};

export default NumBall;