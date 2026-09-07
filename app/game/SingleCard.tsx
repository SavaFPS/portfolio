'use client';

import { IoGameController } from 'react-icons/io5';
import { CardProps } from './page';
import { motion } from 'framer-motion';

interface SingleCardProps {
  card: CardProps;
  handleChoice: (card: CardProps) => void;
  flipped: boolean;
  disabled: boolean;
}

const SingleCard = ({
  card,
  handleChoice,
  flipped,
  disabled,
}: SingleCardProps) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <motion.div
      onClick={handleClick}
      className={`relative h-[70px] w-full cursor-pointer md:h-[100px] ${
        card.matched ? 'text-accent transition-all duration-500 delay-300' : ''
      }`}
      whileHover={{ scale: 1.06 }}
    >
      <motion.div
        className="relative h-full w-full"
        style={{ perspective: '1000px' }}
      >
        <motion.div
          className="absolute flex h-full w-full items-center justify-center rounded-xl bg-secondary"
          style={{ backfaceVisibility: 'hidden' }}
          animate={{ rotateY: flipped ? 0 : -180 }}
          transition={{ duration: 0.55 }}
        >
          <div className="text-center text-4xl md:text-5xl">{card.icon}</div>
        </motion.div>

        <motion.div
          className="absolute flex h-full w-full items-center justify-center rounded-xl border border-cream/10 bg-secondary"
          style={{ backfaceVisibility: 'hidden' }}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="text-center text-4xl text-accent/80">
            <IoGameController />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SingleCard;
