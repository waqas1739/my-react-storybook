import React from 'react';

export type AlertProps = {
  type: 'success' | 'warning' | 'danger';
  message: string;
};

const Alert: React.FC<AlertProps> = ({ type, message }) => {
  let bgColor = '';
  let icon = '';
  switch (type) {
    case 'success':
      bgColor = 'bg-green-100';
      icon = 'check-circle';
      break;
    case 'warning':
      bgColor = 'bg-yellow-100';
      icon = 'exclamation-triangle';
      break;
    case 'danger':
      bgColor = 'bg-red-100';
      icon = 'times-circle';
      break;
    default:
      break;
  }

  return (
    <div className={`px-4 py-3 rounded-md ${bgColor}`} role="alert">
      <div className="flex">
        <div className="py-1">
          <i className={`fas fa-${icon} text-lg text-${type === 'success' ? 'green' : type === 'warning' ? 'yellow' : 'red'}-600`}></i>
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
