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
        type={'primary'}
        onClick={() => {
          alert('hello');
    }}>
        Primary Button
    </Button>
```

** Secondary **

```jsx
    <Button 
        type={'secondary'}
        onClick={() => {
          alert('hello');
    }}>
        Secondary Button
    </Button>
```

** Tertiary **

```jsx
    <Button 
        type={'tertiary'}
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