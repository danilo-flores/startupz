const Button = ({secondary, className, ...props}) => {
  return (
    <button className={`px-4 md:px-8 py-3 text-lg rounded-full border-2 border-primary transition-all ${secondary ? 'text-white bg-primary hover:text-primary hover:bg-white' : 'text-primary hover:bg-primary hover:text-white'}`} {...props}>
      {props.children}
    </button>
  );
};

export default Button;