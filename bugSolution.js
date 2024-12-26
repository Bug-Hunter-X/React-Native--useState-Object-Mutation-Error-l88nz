The correct approach involves creating a copy of the state object and updating the copy.  This ensures a new object reference is created, triggering a re-render.  Here are a few methods:

**1. Using the spread operator:**
```javascript
import React, { useState } from 'react';

const MyComponent = () => {
  const [state, setState] = useState({ count: 0, name: 'Initial' });

  const handleIncrement = () => {
    setState({ ...state, count: state.count + 1 }); // Correct: Creates a new object
  };

  return (
    <View>
      <Text>Count: {state.count}</Text>
      <Text>Name: {state.name}</Text>
      <Button title="Increment" onPress={handleIncrement} />
    </View>
  );
};

export default MyComponent;
```

**2. Using Object.assign():**
```javascript
setState(Object.assign({}, state, { count: state.count + 1 }));
```

**3. Using a functional update:**
This is particularly helpful for complex state objects to avoid creating unnecessary copies:
```javascript
  const handleIncrement = () => {
    setState(prevState => ({ ...prevState, count: prevState.count + 1 }));
  };
```
Choose the method that best suits your coding style and state object complexity.  The spread syntax is often the most readable for simple cases.