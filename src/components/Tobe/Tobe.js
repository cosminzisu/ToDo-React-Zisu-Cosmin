import React from "react";
import "./Tobe.css";

const Tobe = () => {
  return (
    <article>
      <h1 className="titletobe">Tobe list</h1>
      <dl>
        <dt>Analyze everything</dt>
        <dd></dd>
        <dt>Be positive</dt>
        <dd>
          {" "}
          “Keep your face always toward the sunshine—and shadows will fall
          behind you.”
        </dd>
        <dt>Smile</dt>
        <dd>“Beauty is power; a smile is it's sword.”</dd>
        <dt>Be present</dt>
        <dd>
          “Do not dwell in the past, do not dream of the future, concentrate the
          mind on the present moment.”
        </dd>
        <dt>Resolve every task</dt>
        <dd>"Energy and persistence conquer all things."</dd>
      </dl>
    </article>
  );
};

export default Tobe;