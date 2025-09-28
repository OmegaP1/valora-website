'use client';

import React, { createContext, useContext } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import type { ToastType } from '@/types';

interface ToastContextType {
  showToast: (toast: Omit<ToastType, 'id'>) => void;
  showSuccess: (message: string, title?: string) => void;
  showError: (message: string, title?: string) => void;
  showWarning: (message: string, title?: string) => void;
  showInfo: (message: string, title?: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

interface ToastProviderProps {
  children: React.ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  const showToast = ({ type, title, message, duration = 4000 }: Omit<ToastType, 'id'>) => {
    const content = (
      <div className="flex flex-col">
        <div className="font-medium text-dark-900">{title}</div>
        {message && <div className="text-sm text-light-800 mt-1">{message}</div>}
      </div>
    );

    switch (type) {
      case 'success':
        toast.success(content, {
          duration,
          className: 'bg-white border-l-4 border-l-success shadow-soft',
        });
        break;
      case 'error':
        toast.error(content, {
          duration,
          className: 'bg-white border-l-4 border-l-red-500 shadow-soft',
        });
        break;
      case 'warning':
        toast(content, {
          duration,
          icon: '⚠️',
          className: 'bg-white border-l-4 border-l-warning shadow-soft',
        });
        break;
      case 'info':
        toast(content, {
          duration,
          icon: 'ℹ️',
          className: 'bg-white border-l-4 border-l-blue-500 shadow-soft',
        });
        break;
      default:
        toast(content, { duration });
    }
  };

  const showSuccess = (message: string, title: string = 'Success') => {
    showToast({ type: 'success', title, message });
  };

  const showError = (message: string, title: string = 'Error') => {
    showToast({ type: 'error', title, message });
  };

  const showWarning = (message: string, title: string = 'Warning') => {
    showToast({ type: 'warning', title, message });
  };

  const showInfo = (message: string, title: string = 'Info') => {
    showToast({ type: 'info', title, message });
  };

  const contextValue: ToastContextType = {
    showToast,
    showSuccess,
    showError,
    showWarning,
    showInfo,
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          duration: 4000,
          style: {
            background: '#fff',
            color: '#111111',
            border: '1px solid #f6f6f6',
            borderRadius: '12px',
            padding: '16px',
            fontSize: '14px',
            maxWidth: '400px',
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
    </ToastContext.Provider>
  );
}