import React, { useState } from 'react';

function JoinUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleEnter = (e) => {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div style={styles.container}>
       {!submitted && (
        <form onSubmit={handleEnter} style={styles.form}>
            <h2 style={styles.heading}>Enter your Details:</h2>
            <div className='Name' style={{display: 'inline-block'}}>
                <input //first name
                    type="text"
                    placeholder="First Name"
                    style={styles.firstname}
                />
                <input //last name
                type="text"
                placeholder="Last Name"
                style={styles.lastname}
                />
            </div>
            <input //telephone number
            type="tel"
            placeholder="Enter phone number"
            minlength="10"
            maxlength="12"
            style={styles.input}
            />
            <input //DoB
            type="date"
            placeholder="Date of Birth"
            style={styles.input}
            />
            <input //Branch
            type="text"
            placeholder= "Branch"
            style={styles.input}
            list="Branch"
            />
            <datalist id="Branch">
            <option value="Aerospace"></option>
            <option value="Civil"></option>
            <option value="Chemical"></option>
            <option value="Computer Science"></option>
            <option value="Electrical"></option>
            <option value="Mechanical"></option>
            <option value="Economics"></option>
            <option value="Mathematics"></option>
            <option value="Chemistry"></option>
            <option value="Energy"></option>
            <option value="Environmental"></option>
            <option value="Metallurgy"></option>
            <option value="Engineering Physics"></option>
            </datalist>
            <input 
            type="email"
            placeholder="Email"
            style={styles.input}
            />
            <label
            for="enthu"> How's the <larger><strong>Josh</strong></larger>:
            </label>
            <input //How's the Josh
            type="range"
            id="enthu"
            min="0" max="100"
            />
            <br></br>
            <button type="submit" style={styles.button}>Submit</button>
        </form>
      )}
      {submitted &&
      <div>
        <h1>Thank you for Registering!</h1>
        <p>We will get in touch with you soon :)</p>
      </div>}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    padding: '10px',
    marginBottom: '1rem',
    width: '300px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  firstname: {
    padding: '10px',
    marginBottom: '1rem',
    width: '130px',
    marginRight: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  lastname: {
    padding: '10px',
    marginBottom: '1rem',
    width: '140px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  enthu: {
    padding: '0px',
    marginBottom: '1rem',
    width: '300px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default JoinUs;
