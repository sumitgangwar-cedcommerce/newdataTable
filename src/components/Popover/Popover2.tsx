// import React from 'react';
// import { useEffect, useRef } from 'react';

//  function Popover2(props:any) {
//   const ref = useRef(null);
//   const { onClickOutside } = props;

//   useEffect(() => {
//     const handleClickOutside = (event:any) => {
//       if (ref.current && !ref.current.contains(event.target)) {
//         onClickOutside && onClickOutside();
//       }
//     };
//     document.addEventListener('click', handleClickOutside, true);
//     return () => {
//       document.removeEventListener('click', handleClickOutside, true);
//     };
//   }, [ onClickOutside ]);

//   if(!props.show)
//     return null;

//   return (
//     <div ref={ref} className='info-box'>
//         {props.message}
//     </div> );
// }
// export default Popover2;