# click-game

![License](https://img.shields.io/badge/license-MIT-181717?style=for-the-badge) 

## Table of Contents
* [Title](#title)
* [Deployed Link](#deployed-link)
* [Site Picture](#site-gif)
* [Technologies Used](#technologies-used)
* [Description](#description)
* [Work Involved](#work-involved)
* [Code Snippet](#code-snippet)
* [License](#license)
* [Authors](#authors)
* [Questions](#questions)
* [Acknowledgments](#acknowledgments)

## Deployed Link
* Click this link to view the site.
[Deployed Link]()

## Site Gif
![Site](public/assets/simpsons.gif)

## Technologies Used
* React
* animate.css
* javascript
* CSS
* HTML
* Github

## Description
This application is a click game that allows you to test your memory skills! Upon entering the site, you are provided with 12 images which you can click but not more than once. Your score is being tracked as well as the top score.

## Work Involved
In order to develop this application, I utilized Bootstrap and animate.css for the frontend aspects. I utilized React in order to devlop the functionality of the score tracking and ranomization of the images. 

## Code Snippet
* This code snippet highlights how the applications components are rendered.
```
 render() {
    return (
      <Wrapper>
        <Navbar
        score={this.state.score}
        topScore={this.state.topScore}
        rightWrong={this.state.rightWrong}
        />
        <Jumbotron />
        <div className="container">
          {this.state.simpsons.map(simpson => (
            <ActorCard
              cardSelection={this.cardSelection}
              id={simpson.id}
              key={simpson.id}
              image={simpson.image}
              shake={this.state.shake}
            />
          ))}
        </div>
        <Footer />
      </Wrapper>
    );
  }
```

## License
This project is covered under MIT.

## Authors
**UC Berkeley Coding Bootcamp**

**Jessny Joseph** 

## Questions 
* [Github](https://github.com/jessnyj)
* [LinkedIn](https://www.linkedin.com/in/jessny-joseph-361515201)

## Acknowledgments
Trilogy Education Services
