# Material-ui-Global-Theme

![ilaraweb-material-ui](https://user-images.githubusercontent.com/45122941/101259945-7c22f600-3741-11eb-8847-20a870fb114d.jpg)

## Installation

 -- Clone this repository Them folder:
```sh
git clone https://github.com/Mahdi-Farahani/Material-ui-Global-Theme
```
 -- Install Material UI /Styles
 ```sh
npm i @material-ui/styles
```

## Usage 
1- Add this Theme folder to your Project (example: src/theme)
2-Go to your ``HOC Component`` and add :
```
import ```diff-ThemeProvider``` from '@material-ui/core/styles';
```
```
import Theme from '../src/theme';
```
3-Use ``ThemeProvider`` With theme name ->props
```
export default function App() {
  return (
    <ThemeProvider theme={theme.default}>
      <App/>
    </ThemeProvider>
  );
}
```


## Contributing

1. Fork it (<https://github.com/Mahdi-Farahani/Material-ui-Global-Theme/fork>)
2. Commit your changes 
4. Push to the master branch 
5. Create a new Pull Request


