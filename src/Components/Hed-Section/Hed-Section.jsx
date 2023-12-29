// Css
import './Hed-Section.css';

function HedSection(props) {
    const {title,content} = props;

    return (
        <section className='hed-section'>
            <h2 className='title-md subline'>{title}</h2>

            <p>{content}</p>
        </section>
    );
}

export default HedSection;