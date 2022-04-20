const InputField = (props) => {
  //! Define
  const { type, placeholder, className } = props;
  return (
    <div>
      {
        <input
          {...props.field}
          type={type}
          placeholder={placeholder}
          className={className}
        />
      }
    </div>
  );
};

export default InputField;
