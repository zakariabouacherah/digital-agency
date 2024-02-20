const Input = ({ id, label, type, textarea }) => {
  return (
    <div className="relative z-0">
      {textarea ? (
        <textarea
          id={id}
          name={id}
          className="block py-2 px-0 w-full text-sm text-white bg-[#fff0] border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#ff5f1f] resize-none peer"
          placeholder=" "
          rows={3}
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          name={id}
          className="block py-2 px-0 w-full text-sm text-white bg-[#fff0] border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#ff5f1f] peer"
          placeholder=" "
        />
      )}

      <label
        htmlFor={id}
        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#ff5f1f] peer-focus:dark:text-[#ff5f1f] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
