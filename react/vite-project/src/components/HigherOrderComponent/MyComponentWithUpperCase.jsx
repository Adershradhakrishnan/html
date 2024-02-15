//Higher order component(HOC) with functional component

const WithUpperCase = (WrappedComponent) =>{
    return function({text,...resProps}) {
        const upperCaseText = text.toUpperCase();
        return <WrappedComponent text={upperCaseText} {...resProps}/>

    }
}

const MyComponent = ({text})=> <div>{text}</div>

//usage of HOC

const MyComponentWithUpperCase = WithUpperCase(MyComponent);

export default MyComponentWithUpperCase;