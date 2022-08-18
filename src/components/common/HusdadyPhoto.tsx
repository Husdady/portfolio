// Librarys
import Image from 'react-bootstrap/Image'

export default function HusdadyPhoto() {
  return (
    <div className="tm-profile-picture mx-auto overflow-hidden rounded-circle">
      <Image
        fluid
        alt="developer-husdady"
        className="h-100 w-100"
        src="https://i.imgur.com/x4KMctc.jpg"
        style={{ objectFit: 'cover' }}
      />
    </div>
  )
}
