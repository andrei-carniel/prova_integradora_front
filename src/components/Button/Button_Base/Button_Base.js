import './Button_Base.css';

export default function Button_Base({ className = "", style={}, children, ...rest }) {
  return (
    <button 
      className={`button-base ${className}`}
      style={style}
      {...rest}

    >
      {children}
    </button>
  );
}
