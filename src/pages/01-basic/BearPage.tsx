import { useShallow } from "zustand/react/shallow";
import { WhiteCard } from "../../components";
import { useBearStore } from "../../stores";

export const BearPage = () => {
  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <BlackBear />
        <PandaBear />
        <PolarBear />
        <BearDisplay/>
      </div>
    </>
  );
};

export const BlackBear = () => {
  const blackBear = useBearStore((state) => state.blackBears);
  const incrementBear = useBearStore((state) => state.increaseBlackBears);
  return (
    <WhiteCard centered>
      <h2>Osos Negros</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => incrementBear(+1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {blackBear} </span>
        <button onClick={() => incrementBear(-1)}>-1</button>
      </div>
    </WhiteCard>
  );
};

export const PandaBear = () => {
  const pandaBear = useBearStore((state) => state.pandaBears);
  const incrementBear = useBearStore((state) => state.increasePandaBears);
  return (
    <WhiteCard centered>
      <h2>Osos Pandas</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => incrementBear(+1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {pandaBear} </span>
        <button onClick={() => incrementBear(-1)}>-1</button>
      </div>
    </WhiteCard>
  );
};

export const PolarBear = () => {
  const polarBear = useBearStore((state) => state.polarBears);
  const incrementBear = useBearStore((state) => state.increasePolarBears);
  return (
    <WhiteCard centered>
      <h2>Osos Polares</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => incrementBear(+1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {polarBear} </span>
        <button onClick={() => incrementBear(-1)}>-1</button>
      </div>
    </WhiteCard>
  );
};

export const BearDisplay = () => {
  const bears = useBearStore(useShallow((state) => state.bears));
  const doNothing = useBearStore((state) => state.doNothing);
  const addBear = useBearStore((state) => state.addBear);
  const clearBear = useBearStore((state) => state.clearBears);
  return <WhiteCard centered>
    <h2>Osos</h2>
    <button onClick={() => doNothing()}>Do Nothing</button>
    <button className="mt-2" onClick={() => addBear()}>add Bear</button>
    <button className="mt-2"  onClick={() => clearBear()}>Clear Bear</button>
    
      <pre className=""> {JSON.stringify(bears, null)} </pre>
  
  </WhiteCard>;
};
