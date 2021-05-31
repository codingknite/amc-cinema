import dayjs from 'dayjs';

import * as Styles from './styles';
import { WebLinks } from 'components/Movie/Details/styles';

export default function CastBiography({
  name,
  birthday,
  location,
  knownFor,
  biography,
  imdbLink,
  homepage,
  imageUrl,
}) {
  return (
    <Styles.MainWrapper>
      <Styles.BioSection>
        <img src={imageUrl} alt="name" />
        <Styles.BioInfo>
          <Styles.StyledTitle>{name}</Styles.StyledTitle>
          {birthday ? (
            <p>Born on {dayjs(birthday).format(' MMMM DD, YYYY')}</p>
          ) : null}
          {location ? <p className="cat">Born in {location}</p> : null}
          <p>Known For {knownFor}</p>
          <Styles.Bio>
            <h3>Biography</h3>
            <p>
              {biography ? (
                biography.split(' ').slice(0, 80).join(' ') + ' . .'
              ) : (
                <h3>Sorry, No Biography Found Here 😔</h3>
              )}
            </p>
          </Styles.Bio>
          <div>
            <WebLinks href={imdbLink} target="_blank" rel="noopener noreferrer">
              Imdb Profile
            </WebLinks>
            {homepage && (
              <WebLinks
                href={homepage}
                target="_blank"
                rel="noopener noreferrer"
              >
                Personal Website
              </WebLinks>
            )}
          </div>
        </Styles.BioInfo>
      </Styles.BioSection>
    </Styles.MainWrapper>
  );
}
