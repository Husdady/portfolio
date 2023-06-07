// Librarys
import Image from 'react-bootstrap/Image'

export default function HusdadyPhoto() {
  return (
    <div className="tm-profile-picture mx-auto overflow-hidden rounded-circle">
      <Image
        fluid
        alt="developer-husdady"
        className="h-100 w-100 object-fit-cover"
        src="https://imgur.com/CP6BbAg.jpg"
      />
    </div>
  )
}
