// Librarys
import Gallery from 'react-grid-gallery'

// Components
import MultiLangText from '@components/MultiLangText'

// JSON
import gallery from '@assets/data/photos.json'

export default function MyGalleryPhotos() {
  return (
    <div className="d-table">
      <h2 className="text-danger mb-4">
        <MultiLangText dictionaryKey="gallery-xaks20" />
      </h2>

      <section id="gallery">
        <Gallery
          margin={5}
          rowHeight={250}
          images={gallery}
          enableImageSelection
          backdropClosesModal
        />
      </section>
    </div>
  )
}
