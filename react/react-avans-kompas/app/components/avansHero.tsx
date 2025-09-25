import { useState, type Dispatch, type SetStateAction } from "react";

export interface AvansHeroProps {
  imgSrc?: string;
  period?: string;
  ects?: number;
  language?: string;
  location?: string;
  courseCode?: string;
  courseTitle?: string;
  courseDescription?: string;
}

export default function AvansHero({module, isFavorite, setIsFavorite} : {module: AvansHeroProps, isFavorite: boolean,setIsFavorite: Dispatch<SetStateAction<boolean>>}) {
  const { imgSrc, period, ects, language, location, courseCode, courseTitle, courseDescription } = module;
  
  return (
   <div className="hero-container">
    <div className="hero-image">
      <img src={imgSrc} />
    </div>
    <div className="hero-content">
      <div className="tags">
        <span className="tag p3">{period}</span>
        <span className="tag ects">{ects} ECTS</span>
        <span className="tag nl">{language}</span>
      </div>

      <div className="location">
        <span className="location-icon">📍</span>
        <span>{location}</span>
      </div>

      <div className="course-info">
        <p className="course-code">{courseCode}</p>
        <h1 className="course-title">{courseTitle}</h1>
        <p className="course-description">{courseDescription}</p>
      </div>

      <div className="action-buttons">
        <button className="info-button">Meer info</button>
        <button className="enroll-button" >Aanmelden via Osiris</button>
        <button className="favorite-button" onClick={() => {
          setIsFavorite(!isFavorite);
        }} style={ isFavorite ? { color: "red" } : {color: "black"} } >
          ❤
          favorite
        </button>
      </div>
    </div>
  </div>
  )
}