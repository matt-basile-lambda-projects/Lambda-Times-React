What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

- PropTypes are used to check the data types you are receiving from other components via props. It's important to check and understand the data type we are using so that the methods and functions we apply to them or the way we pass them to other components works properly. If we know the type of data we hav e we can avoid applying the inappropriate methods which will cause less bugs in the future. 



Describe a life-cycle event in React?
- In React, when we start our application our components go through a "life-cycle". This involves Mounting, Updating and Unmounting. We can control when these life-cycle moments occur by using life-cycle events. For example, by using the method componentDidMount() we can run a specific line or lines of code once our components complete the Mounting stage of their life-cycle. Other life-cycle events are componentDidUpdate and componentWillUnmount can be used similarly during the updating and unmounting phases. 



Explain the details of a Higher Order Component?
- A High Order Component differs from a standard component, because it can accept components as a argument. This allows us to reuse component logic and return new components with specified information and functionality. Conditional checks and unique state are some of the reasons why we might choose to create a HOC.


What are three different ways to style components in React? Explain some of the benefits of each.
-Vanilla CSS: It's an old faithful, you can tailor it anyway you want and have a unique file for each component.
-ReactStrap: A library that allows you to develop and style quickly and efficiently.
-styled-Components: Another library that allows you to build styled components so that you can write all your files in JS and never rely on CSS files or classnames again. You can also reuse and customize styles and themes unlike the other two.
