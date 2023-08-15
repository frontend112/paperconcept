import React, { FC } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface Props {
  description: string;
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children?: React.ReactNode;
}

const Modal: FC<Props> = ({
  description,
  isOpen,
  onClose,
  title,
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
