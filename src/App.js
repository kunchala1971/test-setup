import React from 'react';

const App = () => {
  return (
    <div>
      <h1>Learn React</h1>
      <label aria-label="content">Hello</label>
      <input
        type="text"
        placeholder="Enter User Name"
        data-testid="username"
      />
			<button name="btnsave">Save</button>
    </div>
  );
};

export default App;
