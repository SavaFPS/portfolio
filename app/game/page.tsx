'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaHtml5, FaCss3, FaReact, FaNode } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiNextdotjs,
  SiGithub,
  SiTypescript,
  SiJavascript,
} from 'react-icons/si';
import SingleCard from './SingleCard';

export type CardProps = {
  icon: JSX.Element;
  matched: boolean;
  id: number;
};

const cardIcons: Omit<CardProps, 'id'>[] = [
  { icon: <FaHtml5 className="text-[60px]" />, matched: false },
  { icon: <FaCss3 />, matched: false },
  { icon: <SiJavascript className="rounded-md" />, matched: false },
  { icon: <SiTypescript />, matched: false },
  { icon: <SiTailwindcss />, matched: false },
  { icon: <FaReact />, matched: false },
  { icon: <SiNextdotjs />, matched: false },
  { icon: <SiGithub />, matched: false },
  { icon: <FaNode className="text-[80px]" />, matched: false },
];

const Game = () => {
  const [cards, setCards] = useState<CardProps[]>([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<CardProps | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<CardProps | null>(null);
  const [disabled, setDisabled] = useState(false);

  // Shuffle Cards
  const shuffleCards = () => {
    const shuffledCards = [...cardIcons, ...cardIcons]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, id: index + Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  // Handle a choice
  const handleChoice = (card: CardProps) => {
    if (card === choiceOne || disabled) return;

    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // Compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.icon.type === choiceTwo.icon.type) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.icon.type === choiceOne.icon.type) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // Reset choice & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  // Start new game automatically on mount
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.6, duration: 0.4, ease: 'easeIn' },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center gap-6">
            <h3 className="text-white/70 text-4xl">Memory Game</h3>
            <Button
              onClick={shuffleCards}
              variant="outline"
              size="md"
              className="uppercase flex items-center gap-2"
            >
              <span>New Game</span>
            </Button>
          </div>

          {/* Game Board */}
          <div className="grid grid-cols-3 sm:grid-cols-6 xl:gap-8 lg:gap-6 gap-4">
            {cards.map((card, index) => (
              <SingleCard
                key={card.id}
                card={card}
                handleChoice={handleChoice}
                flipped={
                  card === choiceOne || card === choiceTwo || card.matched
                }
                disabled={disabled}
                delay={Math.random() * 0.5 + index * 0.03}
              />
            ))}
          </div>

          <p className="text-white/70 text-center text-xl">Turns: {turns}</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Game;
