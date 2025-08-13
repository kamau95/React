     import React, { useEffect } from 'react';
    
    export default function App() {
      useEffect(() => {
        function handleResize() {
          console.log(`Window resized to ${window.innerWidth}x${window.innerHeight}`);
        }
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []); // This effect runs once after the initial render
    
      return (
        <div>
          Resize the window and check the console!
        </div>
      );
    }
