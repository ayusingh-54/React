function customRender(reactElement, mainContainer){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAtrribute('href', reactElement.props.href)
    domElement.setAtrribute('target', reactElement.props.target)
}

const  reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',
    },
    children: 'Click Here'
}



const mainContainer = document.querySelector('#root').innerHTML 
customRnder(reactElement, mainContainer)