import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ContentWrapper, StyledOverlay } from "./Modal.styled";
import { AnimatePresence } from "framer-motion";

type ContentProps = React.ComponentProps<typeof ContentWrapper>;

interface ModalProps {
  width?: number;
  height?: number;
  isOpen?: boolean;
  setOpen?: (open: boolean) => void;
  children: (props: {
    Title: typeof Dialog.Title;
    Description: typeof Dialog.Description;
    Close: typeof Dialog.Close;
  }) => React.ReactNode;
  onEscapeKeyDown?: ContentProps["onEscapeKeyDown"];
  onInteractOutside?: ContentProps["onInteractOutside"];
}

export const initial = { opacity: 0 };
export const animate = { opacity: 1, transition: { duration: 0.3 } };
export const exit = { opacity: 0, transition: { duration: 0.3 } };

export function Modal({
  children,
  width,
  height,
  isOpen,
  setOpen,
  onEscapeKeyDown,
  onInteractOutside = (ev) => ev.preventDefault(),
}: ModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={setOpen}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <StyledOverlay initial={initial} animate={animate} exit={exit} />
            </Dialog.Overlay>
            <ContentWrapper
              width={width}
              height={height}
              onInteractOutside={onInteractOutside}
              onEscapeKeyDown={onEscapeKeyDown}
            >
              {children({
                Title: Dialog.Title,
                Description: Dialog.Description,
                Close: Dialog.Close,
              })}
            </ContentWrapper>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}