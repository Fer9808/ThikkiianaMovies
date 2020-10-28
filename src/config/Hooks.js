import React, { useEffect, useRef } from 'react';

export function usePrevProps (value) {
    const ref = useRef ();
    useEffect (() => {
      ref.current = value;
    });
    return ref.current;
}