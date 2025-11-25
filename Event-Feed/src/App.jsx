import { useState } from 'react'
import './App.css'

function App() {

  const [events, setEvents] = useState([
    {id: 1, title: "Проект Event-Feed", date: "2024-06-15", time: "10:00" },
  ]);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");


  const handleAddEvent = () => {

    if (title.trim() === '' || date === '' || time === '') {
      alert('Пожалуйста, заполните все поля перед добавлением события.');
      return; 
    }

    const newEvent = {
      id: Date.now(),
      title: title,
      date: date,
      time: time,
    };

    setEvents([...events, newEvent]);

    alert(`Добавлено событие: ${title}`);
    setTitle("");
    setDate("");
    setTime("");
  }

  return (
    <div className="app-container">
      <h1>Лента событий</h1>
      
      <div className="add-form">
        <input
          type="text"
          placeholder="Название события"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <button onClick={handleAddEvent}>
          Добавить событие
        </button>
      </div>

      <div className="event-list">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <p> {event.date} |  {event.time}</p>
          </div>
        ))}
      </div>
    </div>
  )
} 

export default App