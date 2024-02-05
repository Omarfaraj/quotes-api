import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function fetchData2(req: NextApiRequest, res: NextApiResponse) {
  const url = 'https://www.boredapi.com/api/activity';
  


  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
