import React, { useState } from 'react'
import './Gallery.css'

const images = [
  { id: 1, src: 'https://via.placeholder.com/600x400?text=Imagem+1', alt: 'Imagem 1' },
  { id: 2, src: 'https://via.placeholder.com/600x400?text=Imagem+2', alt: 'Imagem 2' },
  { id: 3, src: 'https://via.placeholder.com/600x400?text=Imagem+3', alt: 'Imagem 3' },
  { id: 4, src: 'https://via.placeholder.com/600x400?text=Imagem+4', alt: 'Imagem 4' },
]

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(null)

  // Função para abrir a imagem no modal
  const openModal = (index) => {
    setSelectedImage(images[index])
    setCurrentImageIndex(index)
  }

  // Função para fechar o modal
  const closeModal = () => {
    setSelectedImage(null)
  }

  // Função para navegar para a imagem anterior
  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length
    setSelectedImage(images[prevIndex])
    setCurrentImageIndex(prevIndex)
  }

  // Função para navegar para a próxima imagem
  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length
    setSelectedImage(images[nextIndex])
    setCurrentImageIndex(nextIndex)
  }

  return (
    <div className="gallery-container">
      <h1>Galeria de Imagens</h1>
      <div className="gallery">
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className="gallery-image"
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>×</span>
            <button className="prev-button" onClick={prevImage}>&lt;</button>
            <img src={selectedImage.src} alt={selectedImage.alt} className="modal-image" />
            <button className="next-button" onClick={nextImage}>&gt;</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
