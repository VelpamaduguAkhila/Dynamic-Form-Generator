import React, { useState, useEffect } from 'react';
import { FormContext } from './FormContext';
import Element from './components/Element';
import './index.css';

function App() {
  const [text, setText] = useState('');
  const [elements, setElements] = useState(null);

  useEffect(() => {
    setElements(text)
  }, [])

  const { fields } = elements ?? {}

  const onHandleChange = (event) => {
    const { value } = event.target;
    setText(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Submitted text:', text);
    
    // Assuming the text is formatted as "Title: Your Title\nContent: Your content"
  };

  const handleChange = (id, event) => {
    const newElements = { ...elements }
    newElements.fields.forEach(field => {
      const { type, id } = field;
      if (id === id) {
        switch (type) {
          case 'checkbox':
            field['field_value'] = event.target.checked;
            break;

          default:
            field['field_value'] = event.target.value;
            break;
        }


      }
      setElements(newElements)
    });
    console.log(elements)
  }

  return (
    <section>
      <form className='d-flex flex-column' onSubmit={handleSubmit}>
        <textarea 
          className="left-half" 
          value={text} 
          onChange={onHandleChange} 
          placeholder="Enter your JSON content here..."
        />
        <button className='button' type="submit">Submit</button>
      </form>
      <FormContext.Provider value={{ handleChange }}>
        <div className="App container">
          <form>
            {fields ? fields.map((field, i) => <Element key={i} field={field} />) : null}
          </form>
        </div>
      </FormContext.Provider>
    </section>
  );
}

export default App;