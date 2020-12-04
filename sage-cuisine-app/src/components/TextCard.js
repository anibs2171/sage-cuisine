import React, { Children, Component } from 'react';
import { withRouter } from 'react-router-dom';
import './TextCard.css'

class TextCard extends Component {

    constructor(props)
    {
        super(props);
        this.state = {apiResponse: 'Launch Express for API'};
        
    }
    
    componentDidMount = () => {
        fetch('/testAPI')
        .then(res => res.text())
        .then(res => this.setState({apiResponse: res}));
    }

    render() {
        return(
            <div className='sage text-container'>
                <h1 className='header-1'>{this.props.heading}</h1>
                <p className='textbox'>{this.props.children}</p>
                <p className='textbox'>{this.state.apiResponse}</p>
            </div>
        );
    }

}



export default TextCard;