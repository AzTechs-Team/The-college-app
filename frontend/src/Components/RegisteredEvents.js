import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import '../Styles/RegisteredEvents.css'
import RegisteredEventsCard from '../Components/RegisteredEventsCards';

// list of events
const list = [
  { name: 'event1',date:'1/1/2020',place:'Online',time:'10:00am to 1:00pm',img:'carousel-one' },
  { name: 'event2',date:'2/1/2020',place:'Auditorium',time:'12:00pm to 2:00pm',img:'carousel-two' },
  { name: 'event3',date:'3/1/2020',place:'5th floor auditorium',time:'3:00pm to 4:00pm',img:'carousel-three' },
  { name: 'event4',date:'4/1/2020',place:'Auditorium',time:'10:00am to 11:00am',img:'carousel-one' },
  { name: 'event5',date:'5/1/2020',place:'Online',time:'9:00am to 12:00pm',img:'carousel-two'},
  { name: 'event6',date:'6/1/2020',place:'5th floor auditorium',time:'10:00am to 1:00pm',img:'carousel-three' },
  { name: 'event7',date:'7/1/2020',place:'Online',time:'8:00am to 10:00am',img:'carousel-one'},
  { name: 'event8',date:'8/1/2020',place:'Auditorium',time:'10:00am to 1:00pm',img:'carousel-two'},
  { name: 'event9',date:'9/1/2020',place:'Online',time:'10:00am to 1:00pm',img:'carousel-three' }
];

// All events component
// Important! add unique key
export const Menu = (list) => list.map(el => {
  const { name,date,time,place,img } = el;

  return (
    <RegisteredEventsCard
      name={name}
      key={name}
      date={date}
      time={time}
      place={place}
      img={img}
    />
  );
});


const Arrow = ({ name}) => {
  return (
    <div
      className="scroll-menu-arrows"
    >{name}</div>
  );
};


const ArrowLeft = Arrow({ name: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ name: '>', className: 'arrow-next' });

class RegisteredEvents extends Component {
  state = {
    selected: 0
  };
  
  onSelect = key => {
    this.setState({ selected: key });
  }

  
  render() {
    const { selected } = this.state;
    // Create menu from events
    const menu = Menu(list, selected);

    return (
      <div >
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
          wheel={true}
          dragging={true}
        />
        <br/><br/><br/>
      </div>
      
    );
  }
}

export default RegisteredEvents;