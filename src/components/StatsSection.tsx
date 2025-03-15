"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';

const stats = [
  {
    number: '300+',
    label: 'Bệnh viện liên kết',
    value: 300,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-3 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    number: '30,000,000',
    label: 'Phục vụ hơn 30 triệu lượt khám',
    value: 30000000,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-3 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    number: '1,000,000',
    label: 'Tiết kiệm hơn 1 triệu ngày công',
    value: 1000000,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-3 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
];

// AI Brain Icon Component
const AIBrainIcon = () => (
  <motion.div
    className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/4 opacity-20 md:opacity-30 pointer-events-none"
    animate={{
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <svg width="200" height="200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
      <path d="M12 4.5L12 18.5M12 4.5C11 4.5 9.5 5.5 9.5 7M12 4.5C13 4.5 14.5 5.5 14.5 7M12 18.5C10.5 18.5 9.5 20 9.5 21.5M12 18.5C13.5 18.5 14.5 20 14.5 21.5M9.5 7V9M9.5 7C8 7 6.5 8 6.5 9.5M14.5 7V9M14.5 7C16 7 17.5 8 17.5 9.5M6.5 9.5V14.5M6.5 9.5C5 9.5 3.5 10.5 3.5 12M17.5 9.5V14.5M17.5 9.5C19 9.5 20.5 10.5 20.5 12M3.5 12V12.5M3.5 12C2.5 12 2 13 2 14M20.5 12V12.5M20.5 12C21.5 12 22 13 22 14M2 14V15M2 14C2 13.5 2.5 13 3.5 13M22 14V15M22 14C22 13.5 21.5 13 20.5 13M3.5 13V14.5M3.5 13C4.5 13 5.5 13.5 6.5 14.5M20.5 13V14.5M20.5 13C19.5 13 18.5 13.5 17.5 14.5M6.5 14.5C7.5 14.5 8.5 15 9.5 16M17.5 14.5C16.5 14.5 15.5 15 14.5 16M9.5 16V18.5M9.5 16C10.5 16 11.5 16.5 12 17M14.5 16V18.5M14.5 16C13.5 16 12.5 16.5 12 17" 
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  </motion.div>
);

// Floating Particle Component
const Particle = ({ delay = 0 }) => {
  const randomX = Math.random() * 100 - 50; // Random X position between -50 and 50
  
  return (
    <motion.div
      className="absolute w-1 h-1 bg-white rounded-full"
      initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
      animate={{
        opacity: [0, 0.5, 0],
        scale: [0, 1, 0.5],
        x: randomX,
        y: -100,
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: "easeOut"
      }}
    />
  );
};

const StatsSection = () => {
  const [mounted, setMounted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [particles, setParticles] = useState<number[]>([]);

  useEffect(() => {
    setMounted(true);
    // Create 15 particles with different delays
    setParticles(Array.from({ length: 15 }, (_, i) => i * 0.2));
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8 
      } 
    }
  };

  return (
    <section 
      className="bg-primary/95 dark:bg-primary/90 py-16 text-white relative overflow-hidden" 
      ref={ref}
    >
      {/* AI Brain Icon */}
      <AIBrainIcon />

      {/* Particles Container */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((delay, index) => (
          <div key={index} className="absolute" style={{
            left: `${(index / particles.length) * 100}%`,
            bottom: "0"
          }}>
            <Particle delay={delay} />
          </div>
        ))}
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "32px 32px"
        }}></div>
      </div>

      {/* Neural Network Lines Effect */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" className="absolute inset-0">
          <pattern id="neural-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <motion.path
              d="M0 25h50M25 0v50"
              stroke="currentColor"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#neural-pattern)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          variants={container}
          initial={mounted && isInView ? "hidden" : "show"}
          animate={mounted && isInView ? "show" : "show"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center space-y-3 p-6 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300"
              variants={item}
              whileHover={mounted ? { 
                scale: 1.02, 
                boxShadow: "0 0 20px rgba(255,255,255,0.2)",
                transition: { duration: 0.2 } 
              } : {}}
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              >
                {stat.icon}
              </motion.div>
              <Counter value={stat.value} display={stat.number} inView={mounted && isInView} />
              <span className="text-sm md:text-base text-center text-white/90 font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Counter = ({ value, display, inView }: { value: number, display: string, inView: boolean }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    if (!inView) return;

    setCount(0);
    const duration = 2000;
    const increment = value > 1000 ? Math.ceil(value / 200) : 1;
    const stepTime = duration / (value / increment);

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        clearInterval(timer);
        setCount(value);
      } else {
        setCount(current);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span 
      className="text-4xl md:text-5xl font-bold tracking-tight"
      ref={counterRef}
      role="text"
      aria-label={`${display} ${display.includes('+') ? 'plus' : ''}`}
    >
      {inView ? (
        value > 1000 ?
          new Intl.NumberFormat().format(count) :
          count + (display.includes('+') ? '+' : '')
      ) : '0'}
    </span>
  );
};

export default StatsSection;
