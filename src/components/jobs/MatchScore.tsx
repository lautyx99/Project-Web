interface MatchScoreProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
}

export function MatchScore({ score, size = 'md' }: MatchScoreProps) {
  const getColor = (score: number) => {
    if (score >= 80) return '#10B981';
    if (score >= 60) return '#F59E0B';
    return '#EF4444';
  };

  const sizes = {
    sm: { container: 'w-12 h-12', text: 'text-xs' },
    md: { container: 'w-16 h-16', text: 'text-sm' },
    lg: { container: 'w-24 h-24', text: 'text-xl' }
  };

  const color = getColor(score);
  const circumference = 2 * Math.PI * 18;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className={`relative ${sizes[size].container} flex items-center justify-center`}>
      <svg className="transform -rotate-90 w-full h-full">
        <circle
          cx="50%"
          cy="50%"
          r="18"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          className="text-muted"
        />
        <circle
          cx="50%"
          cy="50%"
          r="18"
          stroke={color}
          strokeWidth="3"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-1000"
        />
      </svg>
      <div className={`absolute inset-0 flex flex-col items-center justify-center ${sizes[size].text}`}>
        <span className="font-semibold" style={{ color }}>{score}%</span>
      </div>
    </div>
  );
}
