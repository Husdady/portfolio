// Librarys
import Gallery from 'react-grid-gallery'

// Components
import MultiLangText from '@components/MultiLangText'

// Constants
import { galleryStyle } from './constants'

// JSON
import gallery from '@assets/data/photos.json'

export default function MyGalleryPhotos() {
  return (
    <div className="d-table">
      <h2 className="text-danger mb-4">
        <MultiLangText dictionaryKey="gallery-xaks20" />
      </h2>
      <section id="gallery" style={galleryStyle}>
        <Gallery images={gallery} rowHeight={250} margin={5} backdropClosesModal />
      </section>
    </div>
  )
}
