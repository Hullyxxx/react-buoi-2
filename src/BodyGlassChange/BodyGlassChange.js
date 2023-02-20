import React, { Component } from 'react'
import './BodyGlassChange.css'

export default class BodyGlassChange extends Component {
    render() {
        console.log(this.props)
        return (
            <div className='body-glass'>
                <img id='infoModel' src='./glassesImage/model.jpg' />
                <img id='glassChangeModel' src='./glassesImage/model.jpg' />
                <img className='test' src={this.props.glassChange} />
                <div className='list-glass'>
                    <div className='item-glass row'>
                        {this.props.HandleRenderItemGlass()}
                    </div>
                </div>
            </div>
        )
    }
}
