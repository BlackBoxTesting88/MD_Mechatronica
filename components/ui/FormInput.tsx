import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from 'react';

const fieldClassName =
  'w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:border-transparent transition-all';

type BaseProps = {
  label: string;
  id: string;
  error?: string;
};

type InputProps = BaseProps &
  InputHTMLAttributes<HTMLInputElement> & {
    multiline?: false;
  };

type TextareaProps = BaseProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    multiline: true;
  };

type FormInputProps = InputProps | TextareaProps;

const FormInput = forwardRef<HTMLInputElement | HTMLTextAreaElement, FormInputProps>(
  function FormInput({ label, id, error, className, multiline, ...props }, ref) {
    const borderClassName = error
      ? 'border-red-400 focus:ring-red-400'
      : 'border-white/20 focus:ring-secondary';

    return (
      <div>
        <label htmlFor={id} className="block text-sm font-semibold text-white mb-2">
          {label}
        </label>
        {multiline ? (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            id={id}
            className={`${fieldClassName} ${borderClassName} resize-none ${className ?? ''}`}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${id}-error` : undefined}
            {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            id={id}
            className={`${fieldClassName} ${borderClassName} ${className ?? ''}`}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${id}-error` : undefined}
            {...(props as InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
        {error && (
          <p id={`${id}-error`} className="mt-1.5 text-sm text-red-400" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

export default FormInput;
