'use client'
import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";


function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const folderId = '1Kk3ypjXOsWirPH_MrY8n91xezIJ7df3m';
  const apiKey = 'AIzaSyBO7AlGofcNf8amTrQzWb58MxSM5-e_44c';  

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Debug: Log environment variables
        console.log('Environment variables check:');
        console.log('folderId:', folderId);
        console.log('apiKey:', apiKey ? 'Present' : 'Missing');
        console.log('All env vars:', process.env);
        
        // Correct Google Drive API query format
        // Try multiple query variations if one fails
        const queries = [
          `'${folderId}' in parents and mimeType contains 'image/'`,
          `'${folderId}' in parents and mimeType contains 'image'`,
          `parents in '${folderId}' and mimeType contains 'image/'`
        ];
        
        let query = queries[0]; // Start with the first query
        const encodedQuery = encodeURIComponent(query);

        
        
        const url = `https://www.googleapis.com/drive/v3/files?q=${encodedQuery}&key=${apiKey}&fields=files(id,name,mimeType)`;
        
        console.log('Fetching from URL:', url);
        
        const response = await fetch(url);
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`HTTP ${response.status}: ${errorData.error?.message || 'Unknown error'}`);
        }
        
        const data = await response.json();
        console.log('API Response:', data);
        
        if (data.files && data.files.length > 0) {
          const imageUrls = data.files.map(
            (file) => `https://lh3.googleusercontent.com/d/${file.id}=s1000`
          );
          setImages(imageUrls);
        } else {
          console.log('No images found in the folder');
          setImages([]);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (folderId && apiKey) {
      fetchImages();
    } else {
      setError('Missing folder ID or API key in environment variables');
      setLoading(false);
    }
  }, [folderId, apiKey]);

  if (loading) {
    return (
      <div>
       
        <div style={{ textAlign: 'center', padding: '50px' }}>
          Loading images...
        </div>
      </div>
    );
  }

  return (
    <div>
       {/* Hero Section */}
       <section id="section-hero" className="relative py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our <span className="text-gradient-accent">Gallery</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Explore our portfolio of real projects and visual masterpieces directly from Google Drive
            </p>
          </div>
        </div>
      </section>
      
      {images.length > 0 ? (
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '30px',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px'
      }}>
        {images.map((image, i) => (
          <img 
            key={i} 
            src={image} 
            alt={`Gallery image ${i + 1}`}
            style={{ 
              width: "100%", 
              height: "100%",
              objectFit: "cover",
              display: "block",
              borderRadius: "8px"
            }} 
            onError={(e) => {
              console.error(`Failed to load image: ${image}`);
              e.target.style.display = 'none';
            }}
          />
        ))}
      </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '50px' }}>
          No images found in the folder.
        </div>
      )}
    </div>
  );
}

export default Gallery;