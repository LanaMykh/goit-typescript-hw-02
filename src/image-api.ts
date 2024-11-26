import axios, { AxiosRequestConfig } from "axios";
import { ImageCard } from './types/imageTypes';

axios.defaults.baseURL = "https://api.unsplash.com";

const client_id = "3MMYlehen0jgaGJduN10qlgVFMiu5qccmRzH-thfeH8";

type fetchImageResponse = {
  results: ImageCard[];
  total: number;
  total_pages: number;
};

export const fetchImage = async (searchValue:string, currentPage:number): Promise<fetchImageResponse> => {
  const axiosOptions: AxiosRequestConfig = {
    params: {
      client_id: client_id,
      query: searchValue,
      page: currentPage,
    }
  };
    const response = await axios.get<fetchImageResponse>('/search/photos', axiosOptions);
    // console.log(response.data);
    
  return response.data;
};