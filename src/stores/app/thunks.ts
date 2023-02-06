import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { timeApiResponse } from '@/types/app';

export const fetchSomeData = createAsyncThunk(
  'app/fetchSomeData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'http://worldtimeapi.org/api/timezone/America/Argentina/Salta',
      );

      return {
        response: response.data as timeApiResponse,
      };
    } catch (error) {
      console.log(error);

      return rejectWithValue({});
    }
  },
);
