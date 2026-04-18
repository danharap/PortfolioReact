/** Shared motion tokens — restrained, product-site pacing (opacity + transform) */

export const EASE = [0.16, 1, 0.3, 1];

export const DURATION = {
  reveal: 0.52,
  revealFast: 0.42,
  micro: 0.2,
  bridge: 0.55,
};

export const VIEWPORT = {
  once: true,
  /** Require a bit more of the block in view before firing — calmer than eager triggers */
  amount: 0.22,
  margin: '-4% 0px -4% 0px',
};

export const STAGGER = {
  heroChildren: 0.058,
  heroDelay: 0.1,
  sectionLines: 0.048,
  cards: 0.045,
};
