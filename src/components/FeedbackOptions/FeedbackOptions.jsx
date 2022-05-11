import s from "./feedbackOptions.module.css"

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const keys = Object.keys(onLeaveFeedback);

    return (
        <div>
            {keys.map(key => {
                return (
                    <button className={s.button}  key={key} name={key} onClick={options}>{`${key}`}</button>
                )
            })}
        </div>
    )
};

export default FeedbackOptions;