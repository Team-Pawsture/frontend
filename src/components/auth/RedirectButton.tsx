import Link from 'next/link';

interface RedirectButtonProps {
  description: string;
  linkText: string;
  to: string;
}

export const RedirectButton = ({
  description,
  linkText,
  to,
}: RedirectButtonProps): React.ReactElement => {
  return (
    <div className="mt-3 flex items-center justify-center gap-1">
      <span className="body3 text-gray-400">{description}</span>
      <Link href={to} className="text-primary body2 hover:underline">
        {linkText}
      </Link>
    </div>
  );
};
