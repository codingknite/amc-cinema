/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { BiDollar } from 'react-icons/bi';
import DatePicker from 'react-datepicker';
import { useParams } from 'react-router-dom';
import { BiMinus, BiPlus } from 'react-icons/bi';
import 'react-datepicker/dist/react-datepicker.css';

import * as Styles from './styles';
import { themes } from 'styles/themes';
import * as initialState from 'utils/config';
import Purchase from 'components/Booking/Purchase/index';

const MakeBooking = () => {
  let { movieId } = useParams();

  //global component state
  const [formsFilled, setFormsFilled] = useState(initialState.formState);
  const [activeStep, setActiveStep] = useState(initialState.bookingFormStep);

  // session state
  const [cinema, setCinema] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(initialState.startTime);

  const selectedDate = startDate && startDate.toLocaleDateString();

  // tickets state
  const [attendees, setAttendees] = useState(initialState.attendeeState);
  const [totalBill, setTotalBill] = useState(0);

  const handleStartTime = (_screen, _time) => {
    setStartTime(() => {
      return { ...startTime, screen: _screen, time: _time };
    });
  };

  const ChooseTickets = () => {
    const Datepicker = () => (
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        inline
        minDate={new Date()}
      />
    );

    const validateSession =
      cinema && startDate && startTime.screen && startTime.time ? false : true;

    return (
      <Styles.TicketWrapping>
        <div className="container">
          <h2>Choose Your Tickets</h2>
          <h3>Cinema</h3>
          <Styles.Cinema>
            <button
              onClick={() => setCinema('Sentinel Cinemax')}
              className={cinema === 'Sentinel Cinemax' ? 'selected' : ''}
            >
              Sentinel Cinemax
            </button>
            <button
              onClick={() => setCinema('Century Cinemax')}
              className={cinema === 'Century Cinemax' ? 'selected' : ''}
            >
              Century Cinemax
            </button>
          </Styles.Cinema>

          <h3>Date</h3>
          <Styles.PickDate>
            <Datepicker className="date-picker" />
          </Styles.PickDate>

          <h3>Time</h3>
          <Styles.Time>
            <h3>3D Atmos</h3>
            <Styles.TimeButton
              onClick={() => handleStartTime('3D Atmos', '17:15')}
              className={startTime.time === '17:15' ? 'selected' : ''}
            >
              17:15
            </Styles.TimeButton>
            <Styles.TimeButton
              onClick={() => handleStartTime('3D Atmos', '19:00')}
              className={startTime.time === '19:00' ? 'selected' : ''}
            >
              19:00
            </Styles.TimeButton>
            <Styles.TimeButton
              onClick={() => handleStartTime('3D Atmos', '20:45')}
              className={startTime.time === '20:45' ? 'selected' : ''}
            >
              20:45
            </Styles.TimeButton>
            <Styles.TimeButton
              onClick={() => handleStartTime('3D Atmos', '21:50')}
              className={startTime.time === '21:50' ? 'selected' : ''}
            >
              21:50
            </Styles.TimeButton>
            <Styles.TimeButton
              onClick={() => handleStartTime('3D Atmos', '23:05')}
              className={startTime.time === '23:05' ? 'selected' : ''}
            >
              23:05
            </Styles.TimeButton>
            <Styles.TimeButton
              onClick={() => handleStartTime('3D Atmos', '01:00')}
              className={startTime.time === '01:00' ? 'selected' : ''}
            >
              01:00
            </Styles.TimeButton>
          </Styles.Time>

          <Styles.Time>
            <h3>3D FR</h3>
            <Styles.TimeButton
              onClick={() => handleStartTime('3D FR', '19:30')}
              className={startTime.time === '19:30' ? 'selected' : ''}
            >
              <p>19:30</p>
            </Styles.TimeButton>
            <Styles.TimeButton
              onClick={() => handleStartTime('3D FR', '21:15')}
              className={startTime.time === '21:15' ? 'selected' : ''}
            >
              <p>21:15</p>
            </Styles.TimeButton>
            <Styles.TimeButton
              onClick={() => handleStartTime('3D FR', '23:00')}
              className={startTime.time === '23:00' ? 'selected' : ''}
            >
              <p>23:00</p>
            </Styles.TimeButton>
          </Styles.Time>

          <div className="submit">
            <Styles.SubmitButton
              onClick={() => {
                setFormsFilled(() => {
                  return { ...formsFilled, session: true };
                });
                setActiveStep(() => {
                  return { ...activeStep, step1: false, step2: true };
                });
              }}
              disabled={validateSession}
            >
              Next
            </Styles.SubmitButton>
          </div>
        </div>
      </Styles.TicketWrapping>
    );
  };

  const ChooseSeats = () => {
    const validateTickets = totalBill > 0;
    return (
      <Styles.SessionWrapping>
        <h2>Choose Seats</h2>
        <Styles.SeatSection>
          <div className="category">
            <p>
              <BiDollar />
              <span>20</span>
            </p>
            <h4>Adults</h4>
          </div>
          <div className="cat-buttons">
            <button
              disabled={attendees.adults === 0}
              onClick={() => {
                setAttendees(() => {
                  return { ...attendees, adults: attendees.adults - 1 };
                });
                setTotalBill(totalBill - 20);
              }}
            >
              <BiMinus color={themes.colors.dullWhite} size="1.5rem" />
            </button>
            <span>{attendees.adults}</span>
            <button
              onClick={() => {
                setAttendees(() => {
                  return { ...attendees, adults: attendees.adults + 1 };
                });
                setTotalBill(totalBill + 20);
              }}
            >
              <BiPlus color={themes.colors.dullWhite} size="1.5rem" />
            </button>
          </div>
        </Styles.SeatSection>
        <Styles.SeatSection>
          <div className="category">
            <p>
              <BiDollar />
              <span>10</span>
            </p>
            <h4>Kids</h4>
          </div>
          <div className="cat-buttons">
            <button
              disabled={attendees.kids === 0}
              onClick={() => {
                setAttendees(() => {
                  return { ...attendees, kids: attendees.kids - 1 };
                });
                setTotalBill(totalBill - 10);
              }}
            >
              <BiMinus color={themes.colors.dullWhite} size="1.5rem" />
            </button>
            <span>{attendees.kids}</span>
            <button
              onClick={() => {
                setAttendees(() => {
                  return { ...attendees, kids: attendees.kids + 1 };
                });
                setTotalBill(totalBill + 10);
              }}
            >
              <BiPlus color={themes.colors.dullWhite} size="1.5rem" />
            </button>
          </div>
        </Styles.SeatSection>
        <Styles.SeatSection>
          <div className="category">
            <p>
              <BiDollar /> <span>15</span>
            </p>
            <h4>Seniors 65+</h4>
          </div>
          <div className="cat-buttons">
            <button
              disabled={attendees.seniors === 0}
              onClick={() => {
                setAttendees(() => {
                  return { ...attendees, seniors: attendees.seniors - 1 };
                });
                setTotalBill(totalBill - 15);
              }}
            >
              <BiMinus color={themes.colors.dullWhite} size="1.5rem" />
            </button>
            <span>{attendees.seniors}</span>
            <button
              onClick={() => {
                setAttendees(() => {
                  return { ...attendees, seniors: attendees.seniors + 1 };
                });
                setTotalBill(totalBill + 15);
              }}
            >
              <BiPlus color={themes.colors.dullWhite} size="1.5rem" />
            </button>
          </div>
        </Styles.SeatSection>

        <Styles.TotalBill>
          Total:
          <span>
            <BiDollar />
            {totalBill}
          </span>
        </Styles.TotalBill>

        <Styles.SubmitSeatsButton
          disabled={!validateTickets}
          onClick={() => {
            setFormsFilled(() => {
              return { ...formsFilled, tickets: true };
            });
            setActiveStep(() => {
              return { ...activeStep, step2: false, step3: true };
            });
          }}
        >
          Buy Now For
          <span>
            <BiDollar />
            {totalBill}
          </span>
        </Styles.SubmitSeatsButton>
      </Styles.SessionWrapping>
    );
  };

  const { adults, kids, seniors } = attendees;

  return (
    <>
      <Styles.BookingGuide>
        <Styles.GuideButton
          active={activeStep.step1}
          onClick={() => {
            setActiveStep(() => {
              return { ...activeStep, step1: true, step2: false, step3: false };
            });
            setFormsFilled(() => {
              return { ...formsFilled, session: false, tickets: false };
            });
          }}
        >
          <p className="step-number">1</p>
          <div className="step-name">
            <p className="title">Tickets</p>
            <p className="step">Step 1 of 3</p>
          </div>
        </Styles.GuideButton>
        <Styles.GuideButton
          active={activeStep.step2}
          disabled={!formsFilled.session}
          onClick={() => {
            setActiveStep(() => {
              return { ...activeStep, step1: false, step2: true, step3: false };
            });
            setFormsFilled(() => {
              return { ...formsFilled, tickets: false };
            });
          }}
        >
          <p className="step-number">2</p>
          <div className="step-name active">
            <p className="title">Seats</p>
            <p className="step">Step 2 of 3</p>
          </div>
        </Styles.GuideButton>
        <Styles.GuideButton
          active={activeStep.step3}
          disabled={!formsFilled.tickets}
        >
          <p className="step-number">3</p>
          <div className="step-name">
            <p className="title">Payment</p>
            <p className="step">Step 3 of 3</p>
          </div>
        </Styles.GuideButton>
      </Styles.BookingGuide>

      {formsFilled.session && formsFilled.tickets ? (
        <Purchase
          cinema={cinema}
          movieId={movieId && movieId}
          startDate={selectedDate}
          startTime={startTime.time}
          screen={startTime.screen}
          adults={adults}
          kids={kids}
          seniors={seniors}
          totalBill={totalBill}
        />
      ) : formsFilled.session ? (
        <ChooseSeats />
      ) : formsFilled.tickets ? (
        <Purchase
          cinema={cinema}
          movieId={movieId && movieId}
          startDate={selectedDate}
          startTime={startTime.time}
          screen={startTime.screen}
          adults={adults}
          kids={kids}
          seniors={seniors}
          totalBill={totalBill}
        />
      ) : (
        <ChooseTickets />
      )}
    </>
  );
};

export default MakeBooking;
