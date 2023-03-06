import React from "react";

function ExecuteFunction({myFunction}) {
  return (
    <div>
      <button onClick={myFunction}>Clique para executar a função!</button>
    </div>
  );
}

export default ExecuteFunction;
