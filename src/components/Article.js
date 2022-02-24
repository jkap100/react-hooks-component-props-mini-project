import React from "react";

function minutesEmojis(minutes) {
  if (minutes < 30) {
    let coffee = "";
    for (let i = 0; i < minutes; i += 5) {
      coffee = coffee + "☕️";
    }

    return `${coffee} ${minutes} minutes`;
  } else if (minutes >= 30) {
    let bento = "";
    for (let i = 0; i < minutes; i += 10) {
      bento = bento + "🍱";
    }
    return `${bento} ${minutes} minutes`;
  }
}

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{minutesEmojis(minutes)}</p>
    </article>
  );
}

export default Article;
