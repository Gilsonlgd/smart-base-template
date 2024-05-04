import './Component2.css';

interface Component2Props {
  requiredProp: string;
  optionalProp?: string;
}

function Component2({
  requiredProp,
  optionalProp = 'default value',
}: Component2Props): JSX.Element {
  return (
    <div className="Component2">
      <h1>Component2</h1>
      <p>Required prop: {requiredProp}</p>
      <p>Optional prop: {optionalProp}</p>
    </div>
  );
}

export default Component2;
