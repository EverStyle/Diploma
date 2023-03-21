import React, { useEffect, useState, useMemo } from "react";
import "./SheduleCard.css";
import apiSchedule from "../../api/schedule";
import { ToastContainer, toast } from "react-toastify";

function SheduleCard(props) {
  const [lessons, setLessons] = useState([]);

  const nextDayLessons = useMemo(() => {
    return lessons.filter(lesson => {
      return new Date(lesson.date).getDay() === new Date().getDay() + 1;
    });
  }, [lessons]);

  const days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];


  
  const day = new Date().getDay();

  useEffect(async () => {
    try {
      const request = {
        files: [{ fileName: 'test2' }]
      };
      const response = await apiSchedule.get(request);
      setLessons(response.data.message[0]);
    } catch (error) {
      console.error(error);
      console.error('ERROR GET LESSONS');
      toast.error('Произошла ошибка при получении расписания. Попробуйте позже или обратитесь в техподдержку');
    }
  }, []);

  return (
    
    <div className="card_container">
      <div className="card_time_number">
        <div className="card_number">
          {props.count}
          
        </div>
        <div className="card_time">
          
        </div>
      </div>
      <div className="card_lessons_audit">
        <div className="card_lesson">
          {props.lesson}
          
        </div>
        <div className="card_audit">
          {props.fo}
          
        </div>
      </div>
      <div className="card_teacher">
        {props.teacher}
        
      </div>
    </div>
  );
}

export default SheduleCard;