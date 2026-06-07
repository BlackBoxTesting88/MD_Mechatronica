import { forwardRef, type SelectHTMLAttributes } from 'react';

const fieldClassName =
  'w-full px-4 py-3 bg-white/10 border rounded-lg text-white focus:ring-2 focus:border-transparent transition-all';

type FormSelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  id: string;
  error?: string;
  options: readonly { value: string; label: string }[];
};

const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(function FormSelect(
  { label, id, error, options, className, ...props },
  ref
) {
  const borderClassName = error
    ? 'border-red-400 focus:ring-red-400'
    : 'border-white/20 focus:ring-secondary';

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-white mb-2">
        {label}
      </label>
      <select
        ref={ref}
        id={id}
        className={`${fieldClassName} ${borderClassName} ${className ?? ''}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-dark text-white">
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
});

export default FormSelect;
