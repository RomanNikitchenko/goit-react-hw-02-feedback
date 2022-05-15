import s from './feedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(key => {
        return (
          <button
            className={s.button}
            key={key}
            name={key}
            onClick={onLeaveFeedback}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;
