import {FC, PropsWithChildren} from 'react';
import {cnFeedbackForm} from './feedback-form.const';

interface IFeedbackFormProps extends PropsWithChildren {
    title: string;
    subtitle: string;
    infoText: string;
}

export const FeedbackForm: FC<IFeedbackFormProps> = (props) => {
    return (
        <section className={cnFeedbackForm()}>
            <h2 className={cnFeedbackForm('title')}>
                {props.title}
            </h2>
            <p className={cnFeedbackForm('subtitle')}>
                {props.subtitle}
            </p>
            <form className={cnFeedbackForm('form')}>
                {props.children}
            </form>
            <p className={cnFeedbackForm('info')}>
                {props.infoText}
            </p>
        </section>
    );
};
