import React, {useEffect} from 'react';

interface Props {
  getJokes: () => void;
}

const GetNewBtn: React.FC<Props> = React.memo(({getJokes}) => {
  useEffect(() => {
    console.log("[Button] are rendered/update");
  });
  return (
    <button className="btn btn-primary" onClick={getJokes}>Get new</button>
  );
}, () => {
  return true;
});

export default GetNewBtn;