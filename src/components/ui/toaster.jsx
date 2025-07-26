import {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
} from "./toast";
import { useToastStore } from "./use-toast";
import { useEffect, useState } from "react";

export function Toaster() {
  const [openIds, setOpenIds] = useState([]);
  const { toasts, removeToast } = useToastStore();

  useEffect(() => {
    setOpenIds(toasts.map((t) => t.id));
  }, [toasts]);

  return (
    <ToastProvider>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          open={openIds.includes(toast.id)}
          onOpenChange={(open) => {
            if (!open) removeToast(toast.id);
          }}
          variant={toast.variant || "default"}
        >
          <div className="grid gap-1">
            {toast.title && <ToastTitle>{toast.title}</ToastTitle>}
            {toast.description && (
              <ToastDescription>{toast.description}</ToastDescription>
            )}
          </div>
          <ToastClose />
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  );
}
