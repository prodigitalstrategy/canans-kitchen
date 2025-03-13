import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/google-reviews', async (req, res) => {
  try {
    const { placeId } = req.query;
    const apiKey = process.env.VITE_GOOGLE_PLACES_API_KEY;

    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`
    );

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

export default router;
