// // PhotoGrid.tsx
import React, { useState, useEffect } from 'react';

const API_URL = `https://api.unsplash.com/photos/random?count=9&client_id=epemrpUAzybwcDqulz_-p0E1cBQEJBl9FGbfDONz1aQ`;

interface PhotoGridProps {}

const PhotoGrid: React.FC<PhotoGridProps> = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch photos');
        }
        const data = await response.json();
        const photoUrls = data.map((photo: any) => photo.urls.small);
        setPhotos(photoUrls);
        setError(null);
      } catch (error) {
        console.error('Error fetching photos:', error);
        setError('Failed to fetch photos. Please try again later.');
      }
    };

    fetchPhotos();

    const interval = setInterval(fetchPhotos, 10000);

    return () => clearInterval(interval);
  }, []);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="photo-grid">
      {photos.map((photo, index) => (
        <img key={index} src={photo} alt={`Photo ${index + 1}`} />
      ))}
    </div>
  );
};

export default PhotoGrid;
