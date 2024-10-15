import { ScrollableWrapperProps } from '@/types/components';
import { Stack } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

const ScrollableWrapper: React.FC<ScrollableWrapperProps> = ({
  children,
  id,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Handle automatic scrolling
  useEffect(() => {
    const scrollElement = scrollRef.current;

    if (!scrollElement) return;

    const scroll = () => {
      if (
        scrollElement.scrollLeft + scrollElement.clientWidth >=
        scrollElement.scrollWidth
      ) {
        scrollElement.scrollLeft = 0; // Reset scroll to start when reaching the end
      } else {
        scrollElement.scrollLeft += 1; // Increment scroll position
      }
    };

    let scrollInterval: NodeJS.Timeout | null = null;

    if (!isHovered) {
      scrollInterval = setInterval(scroll, 10); // Start scrolling if not hovered
    }

    return () => {
      if (scrollInterval) clearInterval(scrollInterval); // Clear interval on cleanup or hover
    };
  }, [isHovered]);

  return (
    <Stack
      direction="row"
      ref={scrollRef}
      id={id}
      className="mt-5 p-10 overflow-x-auto space-x-10 relative scrollbar-hidden"
      onMouseEnter={() => setIsHovered(true)} // Stop scrolling on hover
      onMouseLeave={() => setIsHovered(false)} // Resume scrolling on mouse leave
    >
      {children}
    </Stack>
  );
};

export default ScrollableWrapper;
