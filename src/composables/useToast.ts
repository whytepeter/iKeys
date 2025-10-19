import { ref } from 'vue';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface Toast {
    id: string;
    message: string;
    type: ToastType;
    duration: number;
}

const toasts = ref<Toast[]>([]);

export function useToast() {
    const show = (message: string, type: ToastType = 'info', duration: number = 3000) => {
        const id = `toast-${Date.now()}-${Math.random()}`;
        const toast: Toast = { id, message, type, duration };

        toasts.value.push(toast);

        // Auto remove after duration
        setTimeout(() => {
            remove(id);
        }, duration);

        return id;
    };

    const remove = (id: string) => {
        const index = toasts.value.findIndex(t => t.id === id);
        if (index > -1) {
            toasts.value.splice(index, 1);
        }
    };

    const success = (message: string, duration?: number) => show(message, 'success', duration);
    const error = (message: string, duration?: number) => show(message, 'error', duration);
    const warning = (message: string, duration?: number) => show(message, 'warning', duration);
    const info = (message: string, duration?: number) => show(message, 'info', duration);

    return {
        toasts,
        show,
        remove,
        success,
        error,
        warning,
        info,
    };
}

