'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type PixelTransitionProps = {
  firstContent: React.ReactNode;
  secondContent: React.ReactNode;
  gridSize?: number;
  pixelColor?: string;
  animationStepDuration?: number;
  once?: boolean;
  aspectRatio?: string;
  className?: string;
  style?: React.CSSProperties;
};

function shuffleIndices(count: number): number[] {
  const indices = Array.from({ length: count }, (_, index) => index);

  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  return indices;
}

export default function PixelTransition({
  firstContent,
  secondContent,
  gridSize = 7,
  pixelColor = 'currentColor',
  animationStepDuration = 0.3,
  once = false,
  aspectRatio = '100%',
  className = '',
  style,
}: PixelTransitionProps) {
  const [revealed, setRevealed] = useState(false);
  const [phase, setPhase] = useState<'idle' | 'cover' | 'uncover'>('idle');
  const [order, setOrder] = useState<number[]>([]);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const animationRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const prefersReducedMotion = useReducedMotion();

  const totalPixels = gridSize * gridSize;
  const stagger = animationStepDuration / totalPixels;
  const cellSize = 100 / gridSize;

  const pixels = useMemo(
    () =>
      Array.from({ length: totalPixels }, (_, index) => ({
        index,
        row: Math.floor(index / gridSize),
        col: index % gridSize,
      })),
    [gridSize, totalPixels]
  );

  useEffect(() => {
    setIsTouchDevice(
      'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
    );
  }, []);

  const clearAnimations = useCallback(() => {
    animationRef.current.forEach(clearTimeout);
    animationRef.current = [];
  }, []);

  useEffect(() => clearAnimations, [clearAnimations]);

  const schedule = useCallback((fn: () => void, delayMs: number) => {
    const id = setTimeout(fn, delayMs);
    animationRef.current.push(id);
  }, []);

  const animateTo = useCallback(
    (activate: boolean) => {
      clearAnimations();

      if (prefersReducedMotion) {
        setRevealed(activate);
        setPhase('idle');
        setOrder([]);
        return;
      }

      setOrder(shuffleIndices(totalPixels));
      setPhase('cover');

      schedule(() => {
        setRevealed(activate);
        setPhase('uncover');
      }, animationStepDuration * 1000);

      schedule(() => {
        setPhase('idle');
        setOrder([]);
      }, animationStepDuration * 2000);
    },
    [
      animationStepDuration,
      clearAnimations,
      prefersReducedMotion,
      schedule,
      totalPixels,
    ]
  );

  const handleActivate = () => {
    if (!revealed && phase === 'idle') {
      animateTo(true);
    }
  };

  const handleDeactivate = () => {
    if (revealed && !once && phase === 'idle') {
      animateTo(false);
    }
  };

  const handleClick = () => {
    if (phase !== 'idle') return;

    if (!revealed) {
      animateTo(true);
      return;
    }

    if (!once) {
      animateTo(false);
    }
  };

  const getPixelDelay = (pixelIndex: number) => {
    const position = order.indexOf(pixelIndex);
    if (position === -1) return 0;

    if (phase === 'cover') {
      return position * stagger;
    }

    if (phase === 'uncover') {
      return animationStepDuration + position * stagger;
    }

    return 0;
  };

  return (
    <div
      className={`relative w-[300px] max-w-full overflow-hidden rounded-[15px] border-2 border-white bg-[#222] ${className}`}
      style={style}
      onMouseEnter={!isTouchDevice ? handleActivate : undefined}
      onMouseLeave={!isTouchDevice ? handleDeactivate : undefined}
      onClick={isTouchDevice ? handleClick : undefined}
      onFocus={!isTouchDevice ? handleActivate : undefined}
      onBlur={!isTouchDevice ? handleDeactivate : undefined}
      tabIndex={0}>
      <div style={{ paddingTop: aspectRatio }} aria-hidden />

      <div className="absolute inset-0" aria-hidden={revealed}>
        {firstContent}
      </div>

      <div
        className={`absolute inset-0 z-[2] ${revealed ? 'block' : 'hidden'}`}
        aria-hidden={!revealed}>
        {secondContent}
      </div>

      <div className="pointer-events-none absolute inset-0 z-[3]">
        {pixels.map(({ index, row, col }) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              backgroundColor: pixelColor,
              width: `${cellSize}%`,
              height: `${cellSize}%`,
              left: `${col * cellSize}%`,
              top: `${row * cellSize}%`,
            }}
            initial={false}
            animate={{
              opacity: phase === 'cover' ? 1 : 0,
            }}
            transition={{
              duration: 0,
              delay: getPixelDelay(index),
            }}
          />
        ))}
      </div>
    </div>
  );
}
