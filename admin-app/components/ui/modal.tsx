import React, { FC } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface Props {
  onClose: () => void;
  isOpen: boolean;
  title: string;
  description: string;
  children?: React.ReactNode;
}

const Modal: FC<Props> = ({
  onClose,
  isOpen,
  title,
  description,
  children,
}) => {
  const onChange = (open: boolean) => {
    if (!open) onClose();
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={onChange}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        <div>
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
