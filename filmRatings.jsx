import React from "react";

// rating logic function for the Global Cinema Classification Board (GCCB)
export function getFilmRating(content) {
  // NC-17: Explicit sexual or extreme violence/gore
  if (
    content.strongSexualContent ||
    ((content.nudity || content.sexualContent) && (content.graphicViolence || content.gore))
  ) {
    return "NC-17";
  }

  // R: Strong language, nudity, gore, graphic violence
  if (
    content.nudity ||
    content.strongLanguage ||
    content.gore ||
    content.graphicViolence
  ) {
    return "R";
  }

  // PG-13: sexualContent, briefNudity, substanceUse, adultThemes
  if (
    content.sexualContent ||
    content.briefNudity ||
    content.substanceUse ||
    content.adultThemes
  ) {
    return "PG-13";
  }

  // PG: violence and/or language alone or together
  if (content.violence || content.language) {
    return "PG";
  }

  // G: Only cartoonViolence or nothing at all
  if (content.cartoonViolence || Object.values(content).every(v => v === false)) {
    return "G";
  }

  // Default to G if nothing matches!
  return "G";
}

export function FilmRatingDisplay({ content }) {
  const rating = getFilmRating(content);

  return (
    <div>
      <strong>GCCB Rating:</strong> {rating}
    </div>
  );
}