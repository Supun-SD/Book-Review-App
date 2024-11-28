function Input({ label, value, onChange, placeholder, className }) {
  return (
    <div className={className}>
      <label className="text-lg text-gray-700">{label}</label>
      <br />
      <input
        value={value}
        onChange={onChange}
        type="text"
        className="mt-2 w-full rounded-lg border border-gray-300 p-3 transition duration-200 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
