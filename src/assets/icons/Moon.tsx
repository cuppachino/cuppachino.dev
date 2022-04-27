import { SVGProps } from 'react';

function HeroiconsSolidMoon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width='1em' height='1em' viewBox='0 0 20 20' {...props}>
      <path
        fill='currentColor'
        d='M17.293 13.293A8 8 0 0 1 6.707 2.707a8.001 8.001 0 1 0 10.586 10.586Z'></path>
    </svg>
  );
}

export default HeroiconsSolidMoon;
