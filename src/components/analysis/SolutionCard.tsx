interface SolutionCardProps {
  step: number;
  solution: string;
}

export const SolutionCard = ({ step, solution }: SolutionCardProps): React.ReactElement => {
  return (
    <section className="flex gap-3 rounded-(--radius-md) bg-gray-100 px-4 py-3">
      <span className="subhead3 text-gray-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-300">
        {step}
      </span>
      <p className="body1 flex-1 text-gray-600">{solution}</p>
    </section>
  );
};
