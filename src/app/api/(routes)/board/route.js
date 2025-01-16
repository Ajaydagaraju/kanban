import axios from 'axios';

const API_URL = 'https://dash.crisscrosslab.com/api/v1/db/data/v1/pj0y02pt3hdevdj';

export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    case 'GET':
      try {
        const response = await axios.get(`${API_URL}/boards`);
        res.status(200).json(response.data);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch boards' });
      }
      break;
    case 'POST':
      try {
        const response = await axios.post(`${API_URL}/boards`, body);
        res.status(201).json(response.data);
      } catch (error) {
        res.status(500).json({ error: 'Failed to create board' });
      }
      break;
    case 'PUT':
      try {
        const { id, ...updateData } = body;
        const response = await axios.put(`${API_URL}/boards/${id}`, updateData);
        res.status(200).json(response.data);
      } catch (error) {
        res.status(500).json({ error: 'Failed to update board' });
      }
      break;
    case 'DELETE':
      try {
        const { id } = body;
        await axios.delete(`${API_URL}/boards/${id}`);
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: 'Failed to delete board' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
