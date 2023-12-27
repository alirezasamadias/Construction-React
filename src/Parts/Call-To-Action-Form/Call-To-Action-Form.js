// Components
import Form from '../../Components/Form/Form';
// Css
import './Call-To-Action-Form.css';

function CallToActionForm() {
  return (
    <div className='call-to-action-form'>
      <div className='container'>
        <section className='parent-form'>
          <h2 className='title-md'>get a quote today</h2>
          
          <p>at vera eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.</p>

          <Form/>
        </section>
      </div>
    </div>
  );
}

export default CallToActionForm;