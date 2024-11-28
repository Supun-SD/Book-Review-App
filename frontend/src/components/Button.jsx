function Button({ children, onClick, icon, isLoading = false }) {
  return (
    <button
      className={`flex gap-3 rounded-lg px-8 py-4 font-semibold text-white transition duration-300 ${isLoading ? "cursor-not-allowed bg-[#cccccc]" : "bg-[#202055] hover:bg-[#5959a7]"}`}
      onClick={() => onClick()}
      disabled={isLoading}
    >
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <>
          {icon && icon}
          {children}
        </>
      )}
    </button>
  );
}

export default Button;
