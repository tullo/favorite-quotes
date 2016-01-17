NoteToSelf

## Stateless or "dumb" components

The React team has recommended composing the majority of your apps using these stateless "dumb" components.
  
Tests written using the shallow renderer are great for stateless or "dumb" components that simply have their props
passed to them from a parent container or "smart" component.

These shallow renderer tests work especially well with stateless function components.  
They also work well for "unit" tests where you want to make sure your code works in isolation.
  
'React Test Utilities' lets us render a React component one level deep - without a DOM: "Shallow Rendering"

```
const renderer = TestUtils.createRenderer();    // creates a shallow renderer - one level deep ... no DOM
renderer.render(<Icon name='facebook' />);
const actual = renderer.getRenderOutput().props.className.includes('facebook');
const expected = true;
expect(actual).toEqual(expected);
```

expect-jsx for better JSX diffs instead of long object diffs for failing tests

```
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
...
const expected = <div>hello world!</div>;
expect(actual).toIncludeJSX(expected);
```

Stateless functional components take props as an argument and return the element you want to render:

```
// A functional component using an ES2015 (ES6) arrow function:
var Aquarium = (props) => {
  var fish = getFish(props.species);
  return <Tank>{fish}</Tank>;
};
  
// Or with destructuring and an implicit return, simply:
var Aquarium = ({species}) => (
  <Tank>
    {getFish(species)}
  </Tank>
);
  
// Then use: <Aquarium species="rainbowfish" />
```

These components behave just like a React class with only a render method defined.  
Functional components do not have lifecycle methods, but you can set .propTypes and .defaultProps as properties
on the function.

## ES6 / ES2015
String.includes('some string')    /* returns true/false */
