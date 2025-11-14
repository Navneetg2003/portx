const FloatingShapes = () => {
  const shapes = [
    { size: 400, duration: 20, delay: 0, color: 'rgba(56, 189, 248, 0.1)' },
    { size: 300, duration: 25, delay: 5, color: 'rgba(14, 165, 233, 0.08)' },
    { size: 350, duration: 30, delay: 10, color: 'rgba(56, 189, 248, 0.05)' },
    { size: 250, duration: 22, delay: 3, color: 'rgba(125, 211, 252, 0.06)' },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape, index) => (
        <div
          key={index}
          className="absolute rounded-full blur-3xl animate-float"
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            background: shape.color,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${shape.duration}s ease-in-out infinite`,
            animationDelay: `${shape.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;
