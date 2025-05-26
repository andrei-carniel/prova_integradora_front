import './Span_Base.css'

export default function Span_Base({className="", style={}, children, ...rest}){
    return(
        <span
            className={`span-base ${className}`}
            {...rest}
            style={style}
        >
            {children}
        </span>
    )
}