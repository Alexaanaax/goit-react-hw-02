import css from "./Options.module.css";

const Options = ({
  totalFeedback,
  clickReset,
  updateFeedback,
  reviews: { good, neutral, bad, reset },
}) => {
  return (
    <div className={css.options}>
      <button onClick={() => updateFeedback("good")} type="button">
        {good}
      </button>
      <button onClick={() => updateFeedback("neutral")} type="button">
        {neutral}
      </button>
      <button onClick={() => updateFeedback("bad")} type="button">
        {bad}
      </button>
      {totalFeedback > 0 && (
        <button onClick={clickReset} type="button">
          {reset}
        </button>
      )}
    </div>
  );
};

export default Options;
