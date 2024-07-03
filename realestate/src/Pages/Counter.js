import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ targetNumber, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const end = targetNumber;
          const duration = 2000;
          const increment = end / (duration / 50);

          const animateCount = () => {
            start += increment;
            if (start < end) {
              setCount(Math.ceil(start));
              requestAnimationFrame(animateCount);
            } else {
              setCount(end);
            }
          };

          animateCount();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [targetNumber]);

  return (
    <div ref={ref} style={{ textAlign: 'center', margin: '20px' }}>
      <h1 style={{ color: 'red', fontSize: '3rem', margin: '0' }}>{count}</h1>
      <h2 style={{ fontSize: '1.5rem', margin: '0' }}>{label}</h2>
    </div>
  );
};

const Stats = () => {
  const statsData = [
    { id: 1, targetNumber: 85, label: 'SATISFIED CLIENTS' },
    { id: 2, targetNumber: 112, label: 'AWARDS RECEIVED' },
    { id: 3, targetNumber: 32, label: 'SUCCESSFUL TRANSACTIONS' },
    { id: 4, targetNumber: 66, label: 'MONTHLY TRAFFIC' },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '20px' }}>
      {statsData.map((stat) => (
        <Counter key={stat.id} targetNumber={stat.targetNumber} label={stat.label} />
      ))}
    </div>
  );
};

export default Stats;
