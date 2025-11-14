const GridBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-20">
      {/* Vertical lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(56, 189, 248, 0.3)"
              strokeWidth="0.5"
            />
          </pattern>
          <radialGradient id="fade" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#fade)" style={{ mixBlendMode: 'multiply' }} />
      </svg>
    </div>
  );
};

export default GridBackground;
