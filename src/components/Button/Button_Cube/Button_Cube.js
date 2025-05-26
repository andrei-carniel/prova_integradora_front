import './Button_Cube.css';

export default function Button_Cube({ className = "", style={}, children, ...rest }) {
  return (
    <button 
      className={`button-Cube ${className}`}
      style={style}
      {...rest}

    >
      {children}
    </button>
  );
}
