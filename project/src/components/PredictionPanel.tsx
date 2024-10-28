import React from 'react';
import { useHealthPrediction, useRequestPrediction } from '../hooks/useHealth';
import { Activity, AlertTriangle } from 'lucide-react';

interface PredictionPanelProps {
  userId: string;
}

export default function PredictionPanel({ userId }: PredictionPanelProps) {
  const { data: predictions, isLoading } = useHealthPrediction(userId);
  const { mutate: requestPrediction } = useRequestPrediction();

  const handleNewPrediction = () => {
    requestPrediction({
      userId,
      healthData: {
        vitals: {
          heartRate: 75,
          bloodPressure: {
            systolic: 120,
            diastolic: 80
          },
          temperature: 37
        },
        symptoms: [],
        environmentalFactors: {
          airQuality: 50,
          temperature: 22,
          humidity: 45
        }
      }
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Activity className="animate-spin h-8 w-8 text-indigo-600" />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Health Predictions</h2>
        <button
          onClick={handleNewPrediction}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          New Prediction
        </button>
      </div>

      <div className="space-y-4">
        {predictions?.map((prediction: any) => (
          <div key={prediction.id} className="border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <AlertTriangle className={`h-5 w-5 ${
                  prediction.prediction_data.riskLevel === 'High' ? 'text-red-500' :
                  prediction.prediction_data.riskLevel === 'Medium' ? 'text-yellow-500' :
                  'text-green-500'
                }`} />
                <span className="ml-2 font-semibold">
                  Risk Level: {prediction.prediction_data.riskLevel}
                </span>
              </div>
              <span className="text-sm text-gray-500">
                {new Date(prediction.timestamp).toLocaleDateString()}
              </span>
            </div>

            {prediction.prediction_data.recommendations.length > 0 && (
              <div className="mt-3">
                <h4 className="text-sm font-semibold text-gray-700">Recommendations:</h4>
                <ul className="mt-1 text-sm text-gray-600">
                  {prediction.prediction_data.recommendations.map((rec: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2">•</span>
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}