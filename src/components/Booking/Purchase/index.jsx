import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import { BiDollar } from 'react-icons/bi';
import { FaCcVisa } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { SiMastercard, SiAmericanexpress } from 'react-icons/si';

import * as Styles from './styles';
import { fetchData } from 'utils/fetchData';
import { useBookings } from 'context/useBookings';
import { APIKey, baseUrl } from 'utils/config';

const Purchase = ({
  movieId,
  cinema,
  startDate,
  startTime,
  adults,
  kids,
  seniors,
  screen,
  totalBill,
}) => {
  const navigate = useNavigate();
  const { dispatchBooked, dispatchBookedInfo } = useBookings();

  const watchTime = () => {
    let watchHour = startTime.split(':')[0];
    return `${startTime} - ${+watchHour + 1}:${startTime.split(':')[1]}`;
  };

  const reverseDate = () => startDate.split('/').reverse().join('-');

  const { data, isLoading, isError, error } = useQuery(
    ['booked movie data', APIKey, movieId],
    () =>
      fetchData(`${baseUrl}/movie/${movieId}?api_key=${APIKey}&language=en-US`)
  );

  let movieData;
  if (isError) throw error.message;
  if (!isLoading) movieData = data;

  return (
    <Styles.Wrapper>
      <h2>Purchase Summary</h2>
      <Styles.PurchaseInfo>
        <p className="cinema-name">{cinema}</p>
        {movieData && <h3 className="movie-title">{movieData.title}</h3>}

        <div className="date-time">
          <div className="date">
            <p className="date-title">Date</p>
            <p className="format-date">
              {dayjs(reverseDate()).format('MMMM DD, YYYY')}
            </p>
          </div>

          <div className="time">
            <p className="time-title">Time</p>
            <p className="watch-time">{watchTime()}</p>
          </div>
        </div>

        <div className="seats-screen">
          <div className="seats-container">
            <p className="seats">Seats</p>
            <p className="seats-info">
              {adults > 1
                ? `${adults} Adults, `
                : adults === 1
                ? '1 Adult, '
                : null}
              <span>
                {kids > 1 ? `${kids} Kids, ` : kids === 1 ? '1 Kid, ' : null}
              </span>
              <span>
                {seniors > 1
                  ? `${seniors} Senior Citizens`
                  : seniors === 1
                  ? '1 Senior Citizen'
                  : null}
              </span>
            </p>
          </div>

          <div className="screen-container">
            <p className="screen">Screen</p>
            <p className="screen-info">{screen}</p>
          </div>
        </div>

        <p className="total">Total Price</p>
        <p className="total-bill">
          <BiDollar />
          <span>{totalBill}</span>
        </p>
      </Styles.PurchaseInfo>

      <Styles.PaymentWrapper>
        <h4>Payment Method</h4>
        <Styles.PaymentMethods>
          <FaCcVisa size="3rem" />
          <SiMastercard size="3rem" />
          <SiAmericanexpress size="3rem" />
        </Styles.PaymentMethods>
      </Styles.PaymentWrapper>

      <Styles.Button
        onClick={() => {
          dispatchBooked({ type: 'ADD_BOOKED', movieId: +movieId });
          dispatchBookedInfo({
            type: 'ADD_BOOKEDINFO',
            movieId: +movieId,
            adults,
            kids,
            seniors,
            date: startDate,
            cinema,
            screen,
          });
          navigate('/my-bookings');
        }}
      >
        Complete Booking
      </Styles.Button>
    </Styles.Wrapper>
  );
};

Purchase.propTypes = {
  movieId: PropTypes.number.isRequired,
  cinema: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  adults: PropTypes.string.isRequired,
  kids: PropTypes.string.isRequired,
  seniors: PropTypes.string.isRequired,
  screen: PropTypes.string.isRequired,
  totalBill: PropTypes.string.isRequired,
};

export default Purchase;
