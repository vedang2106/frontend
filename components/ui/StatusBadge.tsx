"use client";

import { cn } from '../../lib/utils';

interface StatusBadgeProps {
  status: 'pending' | 'in-progress' | 'resolved' | 'cancelled' | 'high' | 'medium' | 'low';
  variant?: 'status' | 'priority';
  className?: string;
}

const statusConfig = {
  status: {
    pending: {
      label: 'Pending',
      className: 'bg-yellow-100 text-yellow-800 border-yellow-200'
    },
    'in-progress': {
      label: 'In Progress',
      className: 'bg-blue-100 text-blue-800 border-blue-200'
    },
    resolved: {
      label: 'Resolved',
      className: 'bg-green-100 text-green-800 border-green-200'
    },
    cancelled: {
      label: 'Cancelled',
      className: 'bg-gray-100 text-gray-800 border-gray-200'
    }
  },
  priority: {
    high: {
      label: 'High',
      className: 'bg-red-100 text-red-800 border-red-200'
    },
    medium: {
      label: 'Medium',
      className: 'bg-yellow-100 text-yellow-800 border-yellow-200'
    },
    low: {
      label: 'Low',
      className: 'bg-green-100 text-green-800 border-green-200'
    }
  }
};

export function StatusBadge({ status, variant = 'status', className }: StatusBadgeProps) {
  const config = statusConfig[variant][status];
  
  if (!config) {
    return null;
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border',
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
}
