import './Input_Base.css'

export default function Input_Base({ className = "",style={}, ...rest }) {
    return (
      <input
        className={`input-base ${className}`}
        {...rest}
        style={style} 
      />
    );
  }