// Librarys
import { memo } from 'react'

// Components
import MultiLangText from '@components/MultiLangText'

// Librarys
import { Badge, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Interfaces
import { SocialType } from './interfaces'

// JSON
import socialNetworks from '@assets/data/social-networks.json'

function SocialNetworks() {
  return (
    <Container fluid as="section" className="mt-2 mb-4 px-0 px-md-3 px-lg-3">
      <h2 className="text-danger">
        <MultiLangText dictionaryKey="contact-f618is" />:
      </h2>

      <div className="all-social-networks mt-3 text-center">
        {(socialNetworks as SocialType[]).map((social: SocialType, i: number) => (
          <Badge key={i} className="social rounded-0 m-1 fw-normal">
            <a
              rel="noreferrer"
              target="_blank"
              className="text-white catamaran text-decoration-none"
              href={social.accountLink}
            >
              <FontAwesomeIcon icon={social.icon} className="me-2" />
              <span>{social.name}</span>
            </a>
          </Badge>
        ))}
      </div>
    </Container>
  )
}

export default memo(SocialNetworks)
