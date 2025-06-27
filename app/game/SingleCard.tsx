'use client';

import { IoGameController } from 'react-icons/io5';
import { CardProps } from './page';
import { motion } from 'framer-motion';

interface SingleCardProps {
  card: CardProps;
  handleChoice: (card: CardProps) => void;
  flipped: boolean;
  disabled: boolean;
  delay: number;
}

const SingleCard: React.FC<SingleCardProps> = ({
  card,
  handleChoice,
  flipped,
  disabled,
  delay,
}) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <motion.div
      onClick={handleClick}
      className={`relative cursor-pointer w-full h-[70px] md:h-[100px] ${
        card.matched ? 'text-accent transition-all duration-500 delay-300' : ''
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.1 }}
    >
      {/* Card Container */}
      <motion.div
        className={`relative w-full h-full ${flipped ? 'flipped' : ''}`}
        style={{ perspective: '1000px' }}
      >
        {/* Front */}
        <motion.div
          className="absolute w-full h-full bg-secundary flex justify-center items-center rounded-xl"
          style={{ backfaceVisibility: 'hidden' }}
          animate={{ rotateY: flipped ? 0 : -180 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-5xl text-center">{card.icon}</div>
        </motion.div>

        {/* Back */}
        <motion.div
          className="absolute w-full h-full bg-secundary flex justify-center items-center rounded-xl"
          style={{ backfaceVisibility: 'hidden' }}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-5xl text-center">
            <IoGameController />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SingleCard;
