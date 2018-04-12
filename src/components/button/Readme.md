** Usage **

```javascript static
    import { Button } from 'ui-react-component-kit'
```

** Types **

```jsx
    <Button onClick={() => {
        alert('hello');
    }}>
        Sample Button
    </Button>
```

```jsx
    <Button 
        type={'primary'}
        onClick={() => {
          alert('hello');
    }}>
        Primary Button
    </Button>
```

```jsx
    <Button 
        type={'secondary'}
        onClick={() => {
          alert('hello');
    }}>
        Secondary Button
    </Button>
```

```jsx
    <Button 
        type={'tertiary'}
        onClick={() => {
          alert('hello');
    }}>
        Tertiary Button
    </Button>
```

```jsx
    <Button disabled={true}>
        Sample Button
    </Button>
```