** Usage **

```javascript static
    import { Button } from 'ui-react-component-kit'
```

** Blank **

```jsx
    <Button onClick={() => {
        alert('hello');
    }}>
        Sample Button
    </Button>
```

** Primary **

```jsx
    <Button 
        buttonType={'primary'}
        onClick={() => {
          alert('hello');
    }}>
        Primary Button
    </Button>
```

** Secondary **

```jsx
    <Button 
        buttonType={'secondary'}
        onClick={() => {
          alert('hello');
    }}>
        Secondary Button
    </Button>
```

** Tertiary **

```jsx
    <Button 
        buttonType={'tertiary'}
        onClick={() => {
          alert('hello');
    }}>
        Tertiary Button
    </Button>
```

** Disabled **

```jsx
    <Button disabled={true}>
        Sample Button
    </Button>
```