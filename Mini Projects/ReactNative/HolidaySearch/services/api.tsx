import axios from 'axios';
import {Result} from '../types';

export const fetchResults = async (query: string): Promise<Result[]> => {
  try {
    const response = await axios.get(
      'https://openholidaysapi.org/PublicHolidays',
      {
        params: {
          countryIsoCode: 'CH',
          languageIsoCode: 'DE',
          validFrom: '2024-01-01',
          validTo: '2024-12-31',
          subdivisionCode: 'CH-ZH',
        },
      },
    );

    const data = response.data;

    // Filter results based on the query
    const filteredResults = data.filter((item: any) => {
      return item.name.some((name: any) =>
        name.text.toLowerCase().includes(query.toLowerCase()),
      );
    });

    // Transform the filtered results to match the Result type
    const results: Result[] = filteredResults.map((item: any) => ({
      id: item.id,
      title: item.name.find((name: any) => name.language === 'DE').text,
      description: `Start Date: ${item.startDate}, End Date: ${item.endDate}, Type: ${item.type}`,
    }));

    return results;
  } catch (error) {
    console.error('Error fetching results:', error);
    return [];
  }
};
