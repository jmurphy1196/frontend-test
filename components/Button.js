//cta button
export function Button({ className, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${className} px-3.5 py-2.5 text-sm font-semibold `}
    >
      {children}
    </button>
  );
}
