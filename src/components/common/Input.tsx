import { cn } from '@/utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = ({
  label,
  error,
  className,
  name,
  ...props
}: InputProps): React.ReactElement => {
  return (
    <div className="flex w-full flex-col">
      {label && (
        <label htmlFor={name} className="subhead3 text-blue-700">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={name}
          name={name}
          className={cn(
            'body1 mt-2 w-full rounded-md border px-5 py-3 transition-all outline-none',
            'text-cool-900 bg-gray-0 border-blue-200',
            'focus:border-primary focus:bg-blue-50',
            error && 'border-red-200 bg-red-100 text-red-300 focus:border-red-300 focus:bg-red-100',
            className,
          )}
          {...props}
        />
      </div>
      <div className="mt-1 min-h-5">{error && <p className="body2 text-red-300">{error}</p>}</div>
    </div>
  );
};
