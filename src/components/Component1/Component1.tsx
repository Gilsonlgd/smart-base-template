import './Component1.css';

interface Component1Props {
  requiredProp: string;
  optionalProp?: string;
}

function Component1({
  requiredProp,
  optionalProp = 'default value',
}: Component1Props): JSX.Element {
  return (
    <div className="Component1">
      <h1>Component1</h1>
      <p>Required prop: {requiredProp}</p>
      <p>Optional prop: {optionalProp}</p>
    </div>
  );
}

export default Component1;
