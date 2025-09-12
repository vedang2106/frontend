"use client";

import { Card, CardContent, CardHeader, CardTitle } from './Card';

interface ChartProps {
  title: string;
  description?: string;
  data: any[];
  type: 'bar' | 'line' | 'pie' | 'area';
  className?: string;
}

export function Chart({ title, description, data, type, className }: ChartProps) {
  const renderChart = () => {
    switch (type) {
      case 'bar':
        return <BarChart data={data} />;
      case 'line':
        return <LineChart data={data} />;
      case 'pie':
        return <PieChart data={data} />;
      case 'area':
        return <AreaChart data={data} />;
      default:
        return <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Chart not available</p>
        </div>;
    }
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <p className="text-sm text-gray-600">{description}</p>}
      </CardHeader>
      <CardContent>
        {renderChart()}
      </CardContent>
    </Card>
  );
}

function BarChart({ data }: { data: any[] }) {
  const maxValue = Math.max(...data.map(item => item.value));
  
  return (
    <div className="h-64 flex items-end space-x-2 p-4">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col items-center flex-1">
          <div className="w-full bg-gray-200 rounded-t-lg relative">
            <div
              className="bg-blue-500 rounded-t-lg transition-all duration-500"
              style={{ height: `${(item.value / maxValue) * 200}px` }}
            />
          </div>
          <div className="mt-2 text-xs text-gray-600 text-center">
            <div className="font-medium">{item.label}</div>
            <div className="text-gray-500">{item.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function LineChart({ data }: { data: any[] }) {
  return (
    <div className="h-64 flex items-center justify-center">
      <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Line chart visualization</p>
      </div>
    </div>
  );
}

function PieChart({ data }: { data: any[] }) {
  return (
    <div className="h-64 flex items-center justify-center">
      <div className="w-48 h-48 bg-gray-100 rounded-full flex items-center justify-center">
        <p className="text-gray-500 text-center">Pie chart<br/>visualization</p>
      </div>
    </div>
  );
}

function AreaChart({ data }: { data: any[] }) {
  return (
    <div className="h-64 flex items-center justify-center">
      <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Area chart visualization</p>
      </div>
    </div>
  );
}
