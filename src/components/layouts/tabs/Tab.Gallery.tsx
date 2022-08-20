// Components
import MultiLangText from '@layouts/common/MultiLangText'

// Librarys
import Gallery from 'react-grid-gallery'

// JSON
import gallery from '@data/photos.json'

const galleryStyle: React.CSSProperties = {
  overflowY: 'auto',
  maxHeight: 680
}

export default function MyGalleryPhotos() {
  return (
    <div className="d-table">
      <h2 className="text-danger mb-4">
        <MultiLangText dictionaryKey="gallery-xaks20" />
      </h2>
      <section id="gallery" style={galleryStyle}>
        <Gallery
          images={gallery}
          rowHeight={250}
          margin={5}
          backdropClosesModal
        />
      </section>
    </div>
  )
}
