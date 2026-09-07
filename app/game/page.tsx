'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { FaReact, FaNode } from 'react-icons/fa';
import {
  SiExpress,
  SiGraphql,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import SingleCard from './SingleCard';
import type { ReactElement } from 'react';
import PageHeader from '@/components/PageHeader';

export type CardProps = {
  icon: ReactElement;
  matched: boolean;
  id: number;
};

const cardIcons: Omit<CardProps, 'id'>[] = [
  { icon: <SiExpress />, matched: false },
  { icon: <SiTypescript />, matched: false },
  { icon: <SiTailwindcss />, matched: false },
  { icon: <FaReact />, matched: false },
  { icon: <SiNextdotjs />, matched: false },
  { icon: <FaNode className="text-[80px]" />, matched: false },
  { icon: <SiGraphql />, matched: false },
  { icon: <SiPostgresql />, matched: false },
  { icon: <SiRedis />, matched: false },
];

const shuffleDeck = (): CardProps[] =>
  [...cardIcons, ...cardIcons]
    .sort(() => Math.random() - 0.5)
    .map((card, index) => ({ ...card, id: index + Math.random() }));

const Game = () => {
  const [cards, setCards] = useState<CardProps[]>(shuffleDeck);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<CardProps | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<CardProps | null>(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffleDeck());
    setTurns(0);
    setDisabled(false);
  };

  const handleChoice = (card: CardProps) => {
    if (disabled || card === choiceOne || card.matched) return;

    if (!choiceOne) {
      setChoiceOne(card);
      return;
    }

    setChoiceTwo(card);
    setDisabled(true);

    const isMatch = card.icon.type === choiceOne.icon.type;

    if (isMatch) {
      setCards((prevCards) =>
        prevCards.map((item) =>
          item.icon.type === choiceOne.icon.type
            ? { ...item, matched: true }
            : item
        )
      );
      setChoiceOne(null);
      setChoiceTwo(null);
      setTurns((prevTurns) => prevTurns + 1);
      setDisabled(false);
      return;
    }

    window.setTimeout(() => {
      setChoiceOne(null);
      setChoiceTwo(null);
      setTurns((prevTurns) => prevTurns + 1);
      setDisabled(false);
    }, 1000);
  };

  return (
    <section className="py-10 xl:py-14">
      <div className="container mx-auto">
        <div className="mb-8 flex flex-col items-center">
          <PageHeader
            kicker="Game"
            title="Memory game"
            className="mb-5 text-center"
          />
          <Button onClick={shuffleCards} variant="outline" size="md">
            New game
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6 sm:gap-4">
          {cards.map((card) => (
            <SingleCard
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          ))}
        </div>

        <p className="mt-8 text-center text-lg text-cream/60">Turns: {turns}</p>
      </div>
    </section>
  );
};

export default Game;
