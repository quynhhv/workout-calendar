import * as React from 'react';
const Dots = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={4} fill="none" {...props}>
    <ellipse cx={2} cy={1.726} fill="currentColor" rx={1.5} ry={1.48} />
    <ellipse cx={6} cy={1.726} fill="currentColor" rx={1.5} ry={1.48} />
    <ellipse cx={10} cy={1.726} fill="currentColor" rx={1.5} ry={1.48} />
  </svg>
);
export default Dots;
