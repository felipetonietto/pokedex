import { useState, useCallback } from 'react';

export default function useModal() {
  const [isOpen, setOpen] = useState(false);

  const open = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const close = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const toggle = useCallback(() => {
    setOpen(prev => !prev);
  }, [setOpen]);

  return { isOpen, open, close, toggle };
}
