interface MatchBadgeProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
}

export function MatchBadge({
  score,
  size = 'md'
}: MatchBadgeProps) {

  const getVariant = () => {
    if (score >= 90) {
      return `
        bg-green-100
        text-green-700
        dark:bg-green-500/10
        dark:text-green-400
      `;
    }

    if (score >= 75) {
      return `
        bg-amber-100
        text-amber-700
        dark:bg-amber-500/10
        dark:text-amber-400
      `;
    }

    return `
      bg-red-100
      text-red-700
      dark:bg-red-500/10
      dark:text-red-400
    `;
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base'
  };

  return (
    <div
      className={`
        inline-flex
        items-center
        rounded-full
        font-medium
        ${getVariant()}
        ${sizes[size]}
      `}
    >
      {score}% Match
    </div>
  );
}