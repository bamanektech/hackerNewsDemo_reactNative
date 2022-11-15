import {axiosInstance} from './api.config';
import APP_ENDPOINTS from './endpoints';

// Get all News Ids
const getNewsStorysId = async (index: number) => {
  try {
    const response = await axiosInstance.get(
      index === 0 ? APP_ENDPOINTS.NewsStory : APP_ENDPOINTS.JobsStory,
    );
    return {...response};
  } catch (error) {
    return {error, data: {}};
  }
};

// Get Detail from Ids
const getNewsStoryDetail = async (id: number) => {
  return axiosInstance.get(`item/${id}.json?print=pretty`);
};

export default {
  getNewsStorysId,
  getNewsStoryDetail,
};
