'use client';

import React, { createContext, useContext } from 'react';
import { Toaster, toast as hotToast } from 'react-hot-toast';

interface ToastContextType {
  success: (message: string) => void;
  error: (message: string) => void;
  loading: (message: string) => void;
  dismiss: (toastId?: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

interface ToastProviderProps {
  children: React.ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  const success = (message: string) => {
    hotToast.success(message, {
      duration: 4000,
      position: 'top-right',
      style: {
        background: '#10B981',
        color: '#ffffff',
        borderRadius: '0.5rem',
        padding: '1rem',
        fontSize: '0.875rem',
        fontWeight: '500',
      },
      iconTheme: {
        primary: '#ffffff',
        secondary: '#10B981',
      },
    });
  };

  const error = (message: string) => {
    hotToast.error(message, {
      duration: 5000,
      position: 'top-right',
      style: {
        background: '#EF4444',
        color: '#ffffff',
        borderRadius: '0.5rem',
        padding: '1rem',
        fontSize: '0.875rem',
        fontWeight: '500',
      },
      iconTheme: {
        primary: '#ffffff',
        secondary: '#EF4444',
      },
    });
  };

  const loading = (message: string) => {
    return hotToast.loading(message, {
      position: 'top-right',
      style: {
        background: '#3B82F6',
        color: '#ffffff',
        borderRadius: '0.5rem',
        padding: '1rem',
        fontSize: '0.875rem',
        fontWeight: '500',
      },
    });
  };

  const dismiss = (toastId?: string) => {
    hotToast.dismiss(toastId);
  };

  const value: ToastContextType = {
    success,
    error,
    loading,
    dismiss,
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: '',
          duration: 4000,
          style: {
            background: '#ffffff',
            color: '#1F2937',
            borderRadius: '0.5rem',
            border: '1px solid #E5E7EB',
            padding: '1rem',
            fontSize: '0.875rem',
            fontWeight: '500',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          },
          success: {
            iconTheme: {
              primary: '#10B981',
              secondary: '#ffffff',
            },
            style: {
              background: '#ECFDF5',
              color: '#047857',
              border: '1px solid #A7F3D0',
            },
          },
          error: {
            iconTheme: {
              primary: '#EF4444',
              secondary: '#ffffff',
            },
            style: {
              background: '#FEF2F2',
              color: '#DC2626',
              border: '1px solid #FECACA',
            },
          },
          loading: {
            iconTheme: {
              primary: '#3B82F6',
              secondary: '#ffffff',
            },
            style: {
              background: '#EFF6FF',
              color: '#1D4ED8',
              border: '1px solid #BFDBFE',
            },
          },
        }}
      />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

// Export the underlying toast function for advanced usage
export { hotToast as toast };