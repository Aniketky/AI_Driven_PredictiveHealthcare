import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export function useHealthRecords(userId: string) {
  return useQuery(['healthRecords', userId], async () => {
    const { data } = await axios.get(`${API_URL}/health/records/${userId}`);
    return data;
  });
}

export function useAddHealthRecord() {
  const queryClient = useQueryClient();
  
  return useMutation(
    async (healthData: any) => {
      const { data } = await axios.post(`${API_URL}/health/record`, healthData);
      return data;
    },
    {
      onSuccess: (_, variables) => {
        queryClient.invalidateQueries(['healthRecords', variables.userId]);
      }
    }
  );
}

export function useHealthPrediction(userId: string) {
  return useQuery(['healthPrediction', userId], async () => {
    const { data } = await axios.get(`${API_URL}/predictions/history/${userId}`);
    return data;
  });
}

export function useRequestPrediction() {
  const queryClient = useQueryClient();
  
  return useMutation(
    async (predictionData: any) => {
      const { data } = await axios.post(`${API_URL}/predictions/analyze`, predictionData);
      return data;
    },
    {
      onSuccess: (_, variables) => {
        queryClient.invalidateQueries(['healthPrediction', variables.userId]);
      }
    }
  );
}