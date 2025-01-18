import * as React from 'react';

type AddIconProps = React.SVGProps<SVGSVGElement>;

const AddIcon: React.FC<AddIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={13} height={14} fill="none" {...props}>
    <ellipse cx={6.079} cy={7.24} fill="#A0A8B1" rx={6} ry={6.318} />
    <path fill="#fff" fillRule="evenodd" d="M7.079 6.187V4.08h-2v2.106h-2v2.106h2v2.106h2V8.293h2V6.187h-2Z" clipRule="evenodd" />
  </svg>
);

export default AddIcon;
