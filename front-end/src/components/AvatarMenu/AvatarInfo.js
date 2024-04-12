
import React from 'react';




const AvatarInfo = (React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {React.Children.toArray(children).map(
      (child) => child,
    )}
  </a>
)))


export { AvatarInfo };