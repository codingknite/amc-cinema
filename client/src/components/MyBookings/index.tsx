import React from 'react';
import Dayjs from 'dayjs';
import Lazyload from 'react-lazyload';

import * as Styles from './styles';
import { posterUrl } from 'utils/config';
import useFetchAll from 'hooks/useFetchAll';
import { useBookings } from 'context/useBookings';
import { MainLoader } from 'components/Loaders';
import {
  MovieContainer,
  StyledHeader,
  MovieHeader,
  Overview,
} from 'components/FavoriteMovies/styles';
import { TicketTypes } from 'types/types';

const MyBookings = (): JSX.Element => {
  const { bookedMovies, dispatchBooked, bookedInfo, dispatchBookedInfo } =
    useBookings();
  const { data, error, loading } = useFetchAll(bookedMovies);

  if (error) throw error;
  if (loading) return <MainLoader />;

  const reverseDate = (_date: string) => _date.split('/').reverse().join('-');

  return (
    <Styles.Wrapper>
      <StyledHeader>My Bookings</StyledHeader>

      {data &&
        data.map((movie) => {
          return (
            <MovieContainer key={movie.id}>
              <Lazyload height={200}>
                <img src={posterUrl + movie.poster_path} alt={movie.title} />
              </Lazyload>
              <Styles.MovieInfo>
                <MovieHeader>
                  <h2>{movie.title}</h2>
                  <h3>{movie.tagline}</h3>
                </MovieHeader>

                <Overview>
                  <p>{movie.overview}</p>
                </Overview>

                {bookedInfo &&
                  bookedInfo.map((m: TicketTypes) => {
                    return movie.id === m.id ? (
                      <Styles.BookingInfo>
                        <div className="ticket-info">
                          <p>
                            🪑{' '}
                            {m.adults + m.kids + m.seniors > 1
                              ? `${m.adults + m.kids + m.seniors} Seats`
                              : `${m.adults + m.kids + m.seniors} Seat`}
                          </p>
                          <p>🎥 {m.cinema}</p>
                          <p>👓 {m.screen}</p>
                        </div>
                        <p className="date-info">
                          Scheduled on
                          <span>
                            📆{' '}
                            {Dayjs(reverseDate(m.date)).format('DD MMMM, YYYY')}
                          </span>
                        </p>
                      </Styles.BookingInfo>
                    ) : null;
                  })}
                <Styles.CancelButton
                  onClick={() => {
                    dispatchBooked({
                      type: 'REMOVE_BOOKED',
                      movieId: movie.id,
                    });
                    dispatchBookedInfo({
                      type: 'REMOVE_BOOKEDINFO',
                      movieId: movie.id,
                    });
                  }}
                >
                  Cancel Booking
                </Styles.CancelButton>
              </Styles.MovieInfo>
            </MovieContainer>
          );
        })}
    </Styles.Wrapper>
  );
};

export default MyBookings;
