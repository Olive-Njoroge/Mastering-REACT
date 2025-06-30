import { useState } from 'react';

export default function Form() {
  const [coffee, setCoffee] = useState({
    name: '',
    email: '',
    coffee: '',
    quantity: ''
  });

  const [submittedCoffee, setSubmittedCoffee] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCoffee(c => ({
      ...c,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedCoffee(coffee); // Store current values into submitted state
    setCoffee({
      name: '',
      email: '',
      coffee: '',
      quantity: ''
    }); // Optionally clear the form
  };

  return (
    <div >
      <form onSubmit={handleSubmit} className='form'>
        <input type="text" name="name" required placeholder="Your name..." value={coffee.name} onChange={handleChange}/><br></br><br></br>
        <input type="email" name="email" required placeholder="Your email..." value={coffee.email} onChange={handleChange}/><br></br><br></br>
        <input type="text" name="coffee" required placeholder="Coffee name..." value={coffee.coffee} onChange={handleChange}/><br /><br></br>
        <input type="number" name="quantity" required placeholder="Quantity..." value={coffee.quantity} onChange={handleChange}/><br></br><br></br>
        <button type="submit">Submit</button>
      </form>

      {submittedCoffee && (
        <div>
          <p>Name: {submittedCoffee.name}</p>
          <p>Email: {submittedCoffee.email}</p>
          <p>Coffee: {submittedCoffee.coffee}</p>
          <p>Quantity: {submittedCoffee.quantity}</p>
        </div>
      )}
    </div>
  );
}
